import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findUserByEmail, createUser } from "../models/userModel.js";

// console.log("JWT_SECRET:", process.env.JWT_SECRET);

export const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);

    const userId = await createUser(username, email, hash);
    res.status(201).json({ userId });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const response = await findUserByEmail(email);
    if (!response) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const valid = await bcrypt.compare(password, response.password_hash);
    if (!valid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { user_id: response.user_id, is_admin: response.is_admin },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // password_hash eltávolítása
    const { password_hash, ...safeUser } = response;

    res.json({
      token,
      user: safeUser,
    });

  } catch (err) {
    next(err);
  }
};