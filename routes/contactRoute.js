import express from "express";
import { createContact } from "../controllers/contactController.js";

const router = express.Router();
const {
	// getGoals,
	// setGoal,
	// updateGoal,
	// deleteGoal,
    createContact
} = require("../controllers/contactController");

router.post("/", createContact);

export default router;
