import express from "express";
import dotenv from "dotenv";
dotenv.config();

import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./src/routes/auth.route.js";
import { connectDB } from "./src/lib/db.js";
import messageRoutes from "./src/routes/message.route.js";

const app = express();

const PORT = process.env.PORT || 5001; // Default to 5000 if PORT is not set

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // Adjust as needed for your frontend
    credentials: true,
  })
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`); // Use template literals for clarity
  connectDB(); // Connect to the database after starting the server
});
console.log(process.env);
