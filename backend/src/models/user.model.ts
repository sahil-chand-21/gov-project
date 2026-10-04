import pool from "../config/db.js";

export type AdminRole = "SUPER_ADMIN" | "SUB_ADMIN";
export type AdminStatus = "ACTIVE" | "INACTIVE";

export interface AdminRecord {
  id: string;
  fullName: string;
  mobile: string;
  email: string | null;
  passwordHash: string | null;
  role: AdminRole;
  status: AdminStatus;
  firstLogin: boolean;
  createdAt: Date;
  sourceTable: "super_admins" | "admins";
}

interface AdminDbRow {
  id: string | number;
  full_name: string;
  mobile: string;
  email: string | null;
  password_hash: string | null;
  account_status: string;
  first_login: boolean;
  created_at: Date;
  role: AdminRole;
  source_table: "super_admins" | "admins";
}

export async function findAdminByMobile(
  mobile: string
): Promise<AdminRecord | null> {
  const result = await pool.query<AdminDbRow>(
    `SELECT 
       id, 
       full_name, 
       mobile, 
       email, 
       password_hash, 
       account_status, 
       first_login, 
       created_at, 
       'SUPER_ADMIN'::varchar AS role, 
       'super_admins'::varchar AS source_table
     FROM public.super_admins
     WHERE mobile = $1
     UNION ALL
     SELECT 
       id, 
       full_name, 
       mobile, 
       email, 
       password_hash, 
       account_status, 
       first_login, 
       created_at, 
       COALESCE(admin_type, 'SUB_ADMIN')::varchar AS role, 
       'admins'::varchar AS source_table
     FROM public.admins
     WHERE mobile = $1
     LIMIT 1`,
    [mobile]
  );

  const row = result.rows[0];
  if (!row) return null;

  return {
    id: String(row.id),
    fullName: row.full_name,
    mobile: row.mobile,
    email: row.email,
    passwordHash: row.password_hash,
    role: row.role === "SUPER_ADMIN" ? "SUPER_ADMIN" : "SUB_ADMIN",
    status: row.account_status === "ACTIVE" ? "ACTIVE" : "INACTIVE",
    firstLogin: Boolean(row.first_login),
    createdAt: new Date(row.created_at),
    sourceTable: row.source_table,
  };
}

export async function findAdminById(
  id: string,
  role?: AdminRole
): Promise<AdminRecord | null> {
  let query: string;
  let params: unknown[];

  if (role === "SUPER_ADMIN") {
    query = `
      SELECT 
        id, full_name, mobile, email, password_hash, account_status, first_login, created_at,
        'SUPER_ADMIN'::varchar AS role, 'super_admins'::varchar AS source_table
      FROM public.super_admins
      WHERE id = $1
      LIMIT 1
    `;
    params = [id];
  } else if (role === "SUB_ADMIN") {
    query = `
      SELECT 
        id, full_name, mobile, email, password_hash, account_status, first_login, created_at,
        COALESCE(admin_type, 'SUB_ADMIN')::varchar AS role, 'admins'::varchar AS source_table
      FROM public.admins
      WHERE id = $1
      LIMIT 1
    `;
    params = [id];
  } else {
    query = `
      SELECT 
        id, full_name, mobile, email, password_hash, account_status, first_login, created_at,
        'SUPER_ADMIN'::varchar AS role, 'super_admins'::varchar AS source_table
      FROM public.super_admins
      WHERE id = $1
      UNION ALL
      SELECT 
        id, full_name, mobile, email, password_hash, account_status, first_login, created_at,
        COALESCE(admin_type, 'SUB_ADMIN')::varchar AS role, 'admins'::varchar AS source_table
      FROM public.admins
      WHERE id = $1
      LIMIT 1
    `;
    params = [id];
  }

  const result = await pool.query<AdminDbRow>(query, params);
  const row = result.rows[0];
  if (!row) return null;

  return {
    id: String(row.id),
    fullName: row.full_name,
    mobile: row.mobile,
    email: row.email,
    passwordHash: row.password_hash,
    role: row.role === "SUPER_ADMIN" ? "SUPER_ADMIN" : "SUB_ADMIN",
    status: row.account_status === "ACTIVE" ? "ACTIVE" : "INACTIVE",
    firstLogin: Boolean(row.first_login),
    createdAt: new Date(row.created_at),
    sourceTable: row.source_table,
  };
}

export async function recordAdminLogin(
  adminId: string,
  sourceTable: "super_admins" | "admins"
): Promise<void> {
  const targetTable = sourceTable === "super_admins" ? "public.super_admins" : "public.admins";
  try {
    await pool.query(
      `UPDATE ${targetTable} SET last_login_at = NOW(), updated_at = NOW() WHERE id = $1`,
      [adminId]
    );
  } catch (err: unknown) {
    const pgError = err as { code?: string };
    if (pgError.code === "42703") {
      // Column 'last_login_at' does not exist yet; fall back to updated_at
      await pool.query(
        `UPDATE ${targetTable} SET updated_at = NOW() WHERE id = $1`,
        [adminId]
      );
    } else {
      throw err;
    }
  }
}