import "dotenv/config";
import pool from "../src/config/db.js";
import { hashPassword } from "../src/utils/password.js";
const mobile = process.env.SUPER_ADMIN_MOBILE;
const password = process.env.SUPER_ADMIN_PASSWORD;
const fullName = process.env.SUPER_ADMIN_NAME ?? "Super Admin Almora";
if (!mobile || !password) {
    throw new Error("SUPER_ADMIN_MOBILE and SUPER_ADMIN_PASSWORD are required");
}
const passwordHash = await hashPassword(password);
await pool.query(`INSERT INTO users (full_name, mobile, password_hash, role)
   VALUES ($1, $2, $3, 'SUPER_ADMIN')
   ON CONFLICT (mobile) DO UPDATE SET full_name = EXCLUDED.full_name`, [fullName, mobile, passwordHash]);
console.log("Super Admin seed completed");
await pool.end();
//# sourceMappingURL=seed-super-admin.js.map