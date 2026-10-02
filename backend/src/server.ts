import "dotenv/config";
import cors from "cors";
import express from "express";
import pool from "./config/db.js";


const app = express();
const port = Number(process.env.PORT ?? 4000);

app.use(cors());
app.use(express.json());

app.get("/health", (_request, response) => {
  response.json({ status: "ok" });
});

app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query(`
            SELECT
                current_database() AS database,
                NOW() AS server_time
        `);

    res.json({
      success: true,
      message: "PostgreSQL connection successful",
      database: result.rows[0].database,
      server_time: result.rows[0].server_time
    });

  } catch (error: any) {
    console.error("Database error:", error);

    res.status(500).json({
      success: false,
      message: "PostgreSQL connection failed",
      error: error.message
    });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});