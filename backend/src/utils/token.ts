import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret || jwtSecret.length < 32) {
  throw new Error("JWT_SECRET must be configured with at least 32 characters");
}

const signingSecret: string = jwtSecret;

export function createAccessToken(userId: string, role: string): string {
  return jwt.sign({ sub: userId, role }, signingSecret, {
    expiresIn: "8h",
  });
}
