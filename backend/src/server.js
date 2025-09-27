// const express = require("express");
//Using second import

import express from "express";
import dotenv from "dotenv";
import path from "path";
//no need to install this build into node

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/messages.route.js";

dotenv.config();
const app = express();
const __dirname = path.resolve();

const port = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

//make ready for deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(port, () => console.log(`server running on port ${port}`));

// we add type in module in package json file for performance increase  "type": "module",
