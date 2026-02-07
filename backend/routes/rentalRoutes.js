import express from "express";
import { rent, myRentals } from "../controllers/rentalController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, rent);
router.get("/me", authMiddleware, myRentals);

export default router;
