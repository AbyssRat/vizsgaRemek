import express from "express";
import passport from "passport";
import { login, register } from "../controllers/authController.js";
import { issueToken } from "../utils/jwt.js";

const router = express.Router();

// existing routes
router.post("/register", register);
router.post("/login", login);

// // 🔐 Google OAuth start
// router.get(
//   "/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );

// // 🔁 Google OAuth callback
// router.get(
//   "/google/callback",
//   passport.authenticate("google", { session: false }),
//   (req, res) => {
//     const token = issueToken(req.user);
//     res.redirect(`http://localhost:5173/oauth-success?token=${token}`);
//   }
// );

export default router;
