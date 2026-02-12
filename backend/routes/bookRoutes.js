import express from "express";
import { getBooks, getBook } from "../controllers/bookController.js";

const router = express.Router();

router.get("/", getBooks);
router.get("/:id", getBook);

export default router;
