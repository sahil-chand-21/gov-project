import { Router } from "express";
import {
  loginAdmin,
  logoutAdmin,
  getCurrentAdmin,
} from "../controllers/auth.controller.js";
import {
  authenticateToken,
  requireRole,
} from "../middleware/auth.middleware.js";

const router = Router();

// Public auth endpoints
router.get("/login", (_request, response) => {
  response
    .set("Allow", "POST")
    .status(405)
    .json({
      success: false,
      error: {
        code: "METHOD_NOT_ALLOWED",
        message: "Login requests must use POST",
      },
    });
});
router.post("/login", loginAdmin);
router.post("/logout", logoutAdmin);

// Protected session inspection endpoint
router.get("/me", authenticateToken, getCurrentAdmin);

// Role authorization verification endpoints
router.get(
  "/test/admin-only",
  authenticateToken,
  requireRole("SUPER_ADMIN", "SUB_ADMIN"),
  (request, response) => {
    response.json({
      success: true,
      message: "Authorized for SUPER_ADMIN and SUB_ADMIN",
      user: request.user,
    });
  }
);

router.get(
  "/test/super-admin-only",
  authenticateToken,
  requireRole("SUPER_ADMIN"),
  (request, response) => {
    response.json({
      success: true,
      message: "Authorized for SUPER_ADMIN only",
      user: request.user,
    });
  }
);

export default router;
