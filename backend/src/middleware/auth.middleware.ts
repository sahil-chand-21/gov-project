import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { verifyAccessToken } from "../utils/token.js";
import type { AdminRole } from "../models/user.model.js";

const { TokenExpiredError, JsonWebTokenError } = jwt;

export function authenticateToken(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const cookieToken = request.cookies?.accessToken;
  const authHeader = request.headers.authorization;
  let token: string | undefined = cookieToken;

  if (!token && authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.slice(7).trim();
  }

  if (!token) {
    response.status(401).json({
      success: false,
      error: {
        code: "UNAUTHORIZED",
        message: "Authentication token is required",
      },
    });
    return;
  }

  try {
    const payload = verifyAccessToken(token);
    request.user = {
      id: payload.sub,
      role: payload.role,
    };
    next();
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      response.status(401).json({
        success: false,
        error: {
          code: "TOKEN_EXPIRED",
          message: "Session expired. Please log in again",
        },
      });
      return;
    }

    if (error instanceof JsonWebTokenError) {
      response.status(401).json({
        success: false,
        error: {
          code: "INVALID_TOKEN",
          message: "Invalid or tampered authentication token",
        },
      });
      return;
    }

    response.status(401).json({
      success: false,
      error: {
        code: "UNAUTHORIZED",
        message: "Failed to authenticate token",
      },
    });
  }
}

export function requireRole(...allowedRoles: AdminRole[]) {
  return (request: Request, response: Response, next: NextFunction): void => {
    if (!request.user) {
      response.status(401).json({
        success: false,
        error: {
          code: "UNAUTHORIZED",
          message: "Authentication required",
        },
      });
      return;
    }

    if (!allowedRoles.includes(request.user.role)) {
      response.status(403).json({
        success: false,
        error: {
          code: "FORBIDDEN",
          message: "You do not have permission to perform this action",
        },
      });
      return;
    }

    next();
  };
}
