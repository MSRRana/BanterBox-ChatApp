// const express = require("express");
//Using second import

import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/messages.route.js";

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(port, () => console.log(`server running on port ${port}`));

// we add type in module in package json file for performance increase  "type": "module",
