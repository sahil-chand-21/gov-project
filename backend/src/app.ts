import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000";

// Security headers
app.use(helmet());

// Frontend ko backend access karne ki permission
app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
  })
);

// JSON request body read karne ke liye
app.use(express.json());
app.use(cookieParser());

// API rate limiter
app.use(
  "/api",
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: "draft-8",
    legacyHeaders: false,
  })
);

app.use("/api/auth", authRoutes);
// Health check API
app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is running",
  });
});

export default app; 