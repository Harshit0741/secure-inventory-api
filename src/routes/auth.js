const express = require("express");
const jwt = require("jsonwebtoken");
const { db } = require("../config/db");
const { otps, users } = require("../drizzle/schema");
const { eq } = require("drizzle-orm");
const { sendOTP } = require("../utils/mailer");

const router = express.Router();

router.post("/request-otp", async (req, res) => {
  const { email } = req.body;
  const code = Math.floor(100000 + Math.random() * 900000).toString();

  await db.insert(otps).values({ email, code });
  await sendOTP(email, code);

  res.json({ message: "OTP sent" });
});

router.post("/verify-otp", async (req, res) => {
  const { email, code } = req.body;

  const result = await db.select().from(otps).where(eq(otps.email, email));
  const valid = result.find((r) => r.code === code);

  if (!valid) return res.status(400).json({ message: "Invalid OTP" });

  let user = await db.select().from(users).where(eq(users.email, email));
  if (user.length === 0) {
    await db.insert(users).values({ email });
    user = await db.select().from(users).where(eq(users.email, email));
  }

  const token = jwt.sign({ id: user[0].id, email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
});

module.exports = router;
