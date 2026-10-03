import { findAdminByMobile, recordAdminLogin } from "../models/user.model.js";
import { comparePassword } from "../utils/password.js";

export interface AdminLoginInput {
  mobile: string;
  password: string;
}

export interface AuthenticatedAdmin {
  id: string;
  fullName: string;
  mobile: string;
  email: string | null;
  role: "SUPER_ADMIN" | "SUB_ADMIN";
  status: "ACTIVE";
  zone: string | null;
  createdAt: string;
}

export class AuthError extends Error {
  constructor(
    public readonly code: "INVALID_CREDENTIALS" | "ACCOUNT_DISABLED",
    public readonly statusCode: 401,
    message: string
  ) {
    super(message);
    this.name = "AuthError";
  }
}

export async function adminLogin({
  mobile,
  password,
}: AdminLoginInput): Promise<AuthenticatedAdmin> {
  const admin = await findAdminByMobile(mobile);

  if (!admin) {
    throw new AuthError(
      "INVALID_CREDENTIALS",
      401,
      "Invalid mobile number or password"
    );
  }

  const passwordMatches = await comparePassword(password, admin.passwordHash);
  if (!passwordMatches) {
    throw new AuthError(
      "INVALID_CREDENTIALS",
      401,
      "Invalid mobile number or password"
    );
  }

  if (admin.status !== "ACTIVE") {
    throw new AuthError("ACCOUNT_DISABLED", 401, "This account is inactive");
  }

  await recordAdminLogin(admin.id);

  return {
    id: admin.id,
    fullName: admin.fullName,
    mobile: admin.mobile,
    email: admin.email,
    role: admin.role,
    status: "ACTIVE",
    zone: admin.zone,
    createdAt: admin.createdAt.toISOString(),
  };
}
