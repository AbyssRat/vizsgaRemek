import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import rentalRoutes from "./routes/rentalRoutes.js";
import { errorMiddleware } from "./middleware/errorMiddleware.js";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const app = express(); // ✅ app FIRST

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/rentals", rentalRoutes);

app.get("/api/covers/:isbn", (req, res) => {
  const isbn = req.params.isbn;

  const filePath = path.join(process.cwd(), "covers", `${isbn}.jpg`);
  const defaultPath = path.join(process.cwd(), "covers", "default.png");

  try {
    if (fs.existsSync(filePath)) {
      return res.sendFile(filePath);
    }
    return res.sendFile(defaultPath);
  } catch (err) {
    console.error(err);
    res.status(500).send("Image error");
  }
});


app.get("/api/books/file/:fileName", (req, res) => {
  const fileName = req.params.fileName;

  const filePath = path.join(process.cwd(), "books", fileName);

  // Biztonság: ne lehessen ../-el kilépni a mappából
  if (fileName.includes("..")) {
    return res.status(400).send("Invalid file name");
  }

  if (fs.existsSync(filePath)) {
    res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
    res.setHeader("Content-Type", "application/epub+zip");
    return res.status(200).sendFile(filePath);
  } else {
    return res.status(404).send("File not found");
  }
});

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date() });
});

app.use(errorMiddleware);

export default app;
