import express from "express";
import cors from "cors";
import passport from "passport";
import "./config/passport.js"; // ✅ import passport config early
import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import rentalRoutes from "./routes/rentalRoutes.js";
import { errorMiddleware } from "./middleware/errorMiddleware.js";

const app = express(); // ✅ app FIRST

app.use(passport.initialize()); // ✅ now safe

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/rentals", rentalRoutes);

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date() });
});

app.use(errorMiddleware);

export default app;
