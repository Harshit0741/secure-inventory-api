require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const inventoryRoutes = require("./routes/inventory");

const app = express();
const serverless = require("serverless-http");

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/items", inventoryRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
module.exports.handler = serverless(app);
