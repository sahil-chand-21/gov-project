import jwt from "jsonwebtoken";

const rawSecret = process.env.JWT_SECRET?.trim();

if (!rawSecret || rawSecret.length < 32) {
  throw new Error("JWT_SECRET must be configured with at least 32 characters");
}

const signingSecret: string = rawSecret;

export interface AccessTokenPayload {
  sub: string;
  role: "SUPER_ADMIN" | "SUB_ADMIN";
  iat?: number;
  exp?: number;
}

export function createAccessToken(userId: string, role: "SUPER_ADMIN" | "SUB_ADMIN"): string {
  return jwt.sign({ sub: userId, role }, signingSecret, {
    expiresIn: "8h",
    algorithm: "HS256",
  });
}

export function verifyAccessToken(token: string): AccessTokenPayload {
  const decoded = jwt.verify(token, signingSecret, {
    algorithms: ["HS256"],
  });
  return decoded as AccessTokenPayload;
}

