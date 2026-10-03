<<<<<<< Updated upstream
import pg from "pg";
import dotenv from "dotenv";
=======
import "dotenv/config";
import { Pool } from "pg";
>>>>>>> Stashed changes

const connectionString = process.env.DATABASE_URL;

<<<<<<< Updated upstream
const { Pool } = pg;

const pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 5432),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,

    // AWS RDS PostgreSQL requires SSL
    ssl: {
        rejectUnauthorized: false,

    },
});

pool.on("connect", () => {
    console.log("✅ PostgreSQL connected successfully");
});

pool.on("error", (error) => {
    console.error("❌ PostgreSQL pool error:", error);
});

export const getdata = async () => {
    try {
        // const result = await pool.query("SELECT NOW() AS current_time");

        console.log("✅ Database query successful");
        // console.log(result.rows[0]);

        // return result.rows;
    } catch (error) {
        console.error("❌ Database query failed:", error);
        throw error;
    }
};
=======
if (!connectionString) {
  throw new Error("DATABASE_URL is required");
}

const pool = new Pool({
  connectionString,
  max: 10,
  idleTimeoutMillis: 30_000,
  connectionTimeoutMillis: 5_000,
});
>>>>>>> Stashed changes

export const connectDB = async (): Promise<void> => {
  const client = await pool.connect();

  try {
    await client.query("SELECT 1");
    console.log("PostgreSQL connected successfully");
  } finally {
    client.release();
  }
};

export default pool;
