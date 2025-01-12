import express from "express";
import { verifyToken } from "../middleware/authentication.js";
import { updateProject, viewProject } from "../controller/projectController.js";
const router = express.Router();

// Route to view project
router.get("/:id", verifyToken, viewProject);

// Route to update a project
router.put("/:id", verifyToken, updateProject);

export default router;
