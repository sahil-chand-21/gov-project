import pool from "../config/db.js";

export type AdminRole = "SUPER_ADMIN" | "SUB_ADMIN";
export type AdminStatus = "ACTIVE" | "INACTIVE";

export interface AdminRecord {
  id: string;
  fullName: string;
  mobile: string;
  email: string | null;
  passwordHash: string;
  role: AdminRole;
  status: AdminStatus;
  zone: string | null;
  createdAt: Date;
}

interface AdminRow {
  id: string;
  full_name: string;
  mobile: string;
  email: string | null;
  password_hash: string;
  role: AdminRole;
  status: AdminStatus;
  zone: string | null;
  created_at: Date;
}

export async function findAdminByMobile(
  mobile: string
): Promise<AdminRecord | null> {
  const result = await pool.query<AdminRow>(
    `SELECT id, full_name, mobile, email, password_hash, role, status, zone, created_at
     FROM users
     WHERE mobile = $1
       AND role IN ('SUPER_ADMIN', 'SUB_ADMIN')
     LIMIT 1`,
    [mobile]
  );
  const row = result.rows[0];
  if (!row) return null;

  return {
    id: row.id,
    fullName: row.full_name,
    mobile: row.mobile,
    email: row.email,
    passwordHash: row.password_hash,
    role: row.role,
    status: row.status,
    zone: row.zone,
    createdAt: row.created_at,
  };
}

export async function recordAdminLogin(adminId: string): Promise<void> {
  await pool.query("UPDATE users SET last_login_at = NOW() WHERE id = $1", [
    adminId,
  ]);
}