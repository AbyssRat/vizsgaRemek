// import passport from "passport";
// import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// import pool from "./db.js"; // your mysql2 pool

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: process.env.GOOGLE_CALLBACK_URL,
//     },
//     async (_accessToken, _refreshToken, profile, done) => {
//       try {
//         const email = profile.emails[0].value;
//         const googleId = profile.id;
//         const username = profile.displayName;

//         // 1️⃣ Check if the user already exists
//         const [rows] = await pool.query(
//           "SELECT * FROM users WHERE google_id = ?",
//           [googleId]
//         );

//         let user;

//         if (rows.length === 0) {
//           // 2️⃣ User doesn’t exist → insert into DB
//           const [result] = await pool.query(
//             "INSERT INTO users (email, username, google_id) VALUES (?, ?, ?)",
//             [email, username, googleId]
//           );

//           // 3️⃣ Return the newly created user
//           user = { id: result.insertId, email, username, google_id: googleId };
//         } else {
//           // User exists → return existing user
//           user = rows[0];
//         }

//         done(null, user);
//       } catch (err) {
//         done(err, null);
//       }
//     }
//   )
// );

// // Optional: for session support
// passport.serializeUser((user, done) => done(null, user.id));
// passport.deserializeUser(async (id, done) => {
//   try {
//     const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
//     done(null, rows[0]);
//   } catch (err) {
//     done(err, null);
//   }
// });

// export default passport;
