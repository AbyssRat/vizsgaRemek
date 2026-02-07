import express from "express";
import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import rentalRoutes from "./routes/rentalRoutes.js";
import { errorMiddleware } from "./middleware/errorMiddleware.js";

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/rentals", rentalRoutes);


app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date() });
});


app.use(errorMiddleware);

export default app;
