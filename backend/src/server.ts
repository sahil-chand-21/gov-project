import "dotenv/config";
import app from "./app.js";
import cors from "cors";
import pool from "./config/db.js";
import express from "express";
const port = Number(process.env.PORT ?? 4000);


app.get("/health", (_request, response) => {
  response.json({ status: "ok" });
});

app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query(`
            SELECT * FROM public.users
            ORDER BY id ASC 
        `);

    res.json({
      success: true,
     
        message: "Users fetched successfully",
        count: result.rowCount,
        users: result.rows
      // server_time: result.rows[0].server_time
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
