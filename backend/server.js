import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
import mongoose from "mongoose";
import productRoutes from "./routes/product.route.js";
import userRoutes from "./routes/user.route.js";
import cors from "cors";
import e from "express";

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//middlewares thar allows us to accept json data in the body
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);
app.use("/uploads", express.static(path.join(__dirname, "/uploads"))); // Serve static files from the uploads directory
// Log incoming requests for debugging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes); // Add user routes here
//catch all the routes that are not defined
app.use((req, res) => {
  res.status(404).json({ success: false, message: "404 Not Found" });
});

//listen to port 3000
app.listen(5000, () => {
  connectDB();
  console.log("server started at http://localhost:" + PORT);
});
