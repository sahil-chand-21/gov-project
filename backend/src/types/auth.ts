import type { Request } from "express";
import type { AdminRole } from "../models/user.model.js";

export interface AuthenticatedUser {
  id: string;
  role: AdminRole;
}

export interface AuthenticatedRequest extends Request {
  user?: AuthenticatedUser;
}
