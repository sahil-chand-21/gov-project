import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool(
  process.env.DATABASE_URL
    ? { connectionString: process.env.DATABASE_URL }
    : {
        host: process.env.DB_HOST || "localhost",
        port: Number(process.env.DB_PORT) || 5432,
        user: process.env.DB_USER || "postgres",
        password: process.env.DB_PASSWORD || "@bhavesh2006",
        database: process.env.DB_DATABASE || "govt_project",
      }
);

async function getdata() {
  try {
    const res = await pool.query("select * from admin_register");
    for (let i = 0; i < res.rows.length; i++) {
      console.log(res.rows[i]?.admin_id);
      const data = { admin_id: res.rows[i]?.password };
      console.log(data);
    }
  } catch (error) {
    console.error("Database query failed:", error);
  }
}

getdata();

export default pool;