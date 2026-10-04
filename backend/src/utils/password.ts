import bcrypt from "bcryptjs";

const SALT_ROUNDS = 12;

export async function hashPassword(
    password: string
): Promise<string> {
    return bcrypt.hash(password, SALT_ROUNDS);
}

export async function comparePassword(
  password: string,
  passwordHash: string | null | undefined
): Promise<boolean> {
  if (!password || !passwordHash || typeof passwordHash !== "string") {
    return false;
  }
  try {
    return await bcrypt.compare(password, passwordHash);
  } catch {
    return false;
  }
}