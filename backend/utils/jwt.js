import jwt from "jsonwebtoken";

export const signToken = (payload) =>
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });
