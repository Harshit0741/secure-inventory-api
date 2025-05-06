const { pgTable, serial, varchar, integer, uuid } = require("drizzle-orm/pg-core");

const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: varchar("email", { length: 255 }).unique().notNull(),
});

const otps = pgTable("otps", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull(),
  code: varchar("code", { length: 6 }).notNull(),
});

const items = pgTable("items", {
  id: serial("id").primaryKey(),
  userId: uuid("user_id").notNull().references(() => users.id),
  name: varchar("name", { length: 255 }).notNull(),
  quantity: integer("quantity").notNull(),
});

module.exports = { users, otps, items };
