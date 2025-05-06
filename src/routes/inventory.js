const express = require("express");
const { db } = require("../config/db");
const { items } = require("../drizzle/schema");
const { eq } = require("drizzle-orm");
const { authenticate } = require("../middleware/auth");

const router = express.Router();
router.use(authenticate);

router.get("/", async (req, res) => {
  const userId = req.user.id;
  const userItems = await db.select().from(items).where(eq(items.userId, userId));
  res.json(userItems);
});

router.post("/", async (req, res) => {
  const { name, quantity } = req.body;
  const userId = req.user.id;
  await db.insert(items).values({ name, quantity, userId });
  res.json({ message: "Item added" });
});

router.put("/:id", async (req, res) => {
  const { name, quantity } = req.body;
  const { id } = req.params;
  const userId = req.user.id;

  await db.update(items).set({ name, quantity }).where(eq(items.id, +id)).where(eq(items.userId, userId));
  res.json({ message: "Item updated" });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  await db.delete(items).where(eq(items.id, +id)).where(eq(items.userId, userId));
  res.json({ message: "Item deleted" });
});

module.exports = router;
