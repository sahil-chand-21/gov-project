import type { Request, Response } from "express";
import { z } from "zod";
import { adminLogin, AuthError } from "../services/auth-service.js";
import { createAccessToken } from "../utils/token.js";

const loginSchema = z.object({
  mobile: z.string().trim().regex(/^[0-9]{10,15}$/),
  password: z.string().min(1).max(128),
});

const accessTokenCookie = "accessToken";

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
    response.cookie(accessTokenCookie, accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 8 * 60 * 60 * 1000,
      path: "/",
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

export function logoutAdmin(
  _request: Request,
  response: Response
): void {
  response.clearCookie(accessTokenCookie, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });
  response.status(204).send();
}
