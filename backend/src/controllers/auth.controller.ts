import type { Request, Response } from "express";
import { z } from "zod";
import { adminLogin, AuthError } from "../services/auth-service.js";
import { createAccessToken } from "../utils/token.js";
import { findAdminById } from "../models/user.model.js";

const loginSchema = z.object({
  mobile: z.string().trim().regex(/^[0-9]{10,15}$/),
  password: z.string().min(1).max(128),
});

const ACCESS_TOKEN_COOKIE = "accessToken";

const getAuthCookieOptions = () => ({
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
});

export async function loginAdmin(
  request: Request,
  response: Response
): Promise<void> {
  const parsed = loginSchema.safeParse(request.body);
  if (!parsed.success) {
    response.status(400).json({
      success: false,
      error: {
        code: "INVALID_REQUEST",
        message: "Mobile number and password are required",
      },
    });
    return;
  }

  try {
    const admin = await adminLogin(parsed.data);
    const accessToken = createAccessToken(admin.id, admin.role);

    response.cookie(ACCESS_TOKEN_COOKIE, accessToken, {
      ...getAuthCookieOptions(),
      maxAge: 8 * 60 * 60 * 1000, // 8 hours
    });

    response.json({ success: true, data: { admin } });
  } catch (error) {
    if (error instanceof AuthError) {
      response.status(error.statusCode).json({
        success: false,
        error: { code: error.code, message: error.message },
      });
      return;
    }

    console.error("Admin login failed", error);
    response.status(500).json({
      success: false,
      error: { code: "LOGIN_FAILED", message: "Unable to complete login" },
    });
  }
}

export async function getCurrentAdmin(
  request: Request,
  response: Response
): Promise<void> {
  if (!request.user) {
    response.status(401).json({
      success: false,
      error: { code: "UNAUTHORIZED", message: "Not authenticated" },
    });
    return;
  }

  try {
    const admin = await findAdminById(request.user.id, request.user.role);
    if (!admin || admin.status !== "ACTIVE") {
      response.status(401).json({
        success: false,
        error: { code: "UNAUTHORIZED", message: "Account is inactive or not found" },
      });
      return;
    }

    response.json({
      success: true,
      data: {
        admin: {
          id: admin.id,
          fullName: admin.fullName,
          mobile: admin.mobile,
          email: admin.email,
          role: admin.role,
          status: admin.status,
          firstLogin: admin.firstLogin,
          createdAt: admin.createdAt.toISOString(),
        },
      },
    });
  } catch (error) {
    console.error("Failed to fetch current admin:", error);
    response.status(500).json({
      success: false,
      error: { code: "SERVER_ERROR", message: "Unable to retrieve session profile" },
    });
  }
}

export function logoutAdmin(
  _request: Request,
  response: Response
): void {
  response.clearCookie(ACCESS_TOKEN_COOKIE, getAuthCookieOptions());
  response.status(204).send();
}

