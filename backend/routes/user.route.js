import {
  RegisterUser,
  LoginUser,
  getUserProfile,
} from "../controllers/userController.js";
import express from "express";

const router = express.Router();

router.post("/register", RegisterUser);
router.post("/login", LoginUser);
router.get("/profile", getUserProfile);
// router.put("/profile", updateUserProfile);
export default router;
// This code sets up an Express router for user-related routes. It imports necessary functions from the user controller and defines routes for user registration, login, and profile retrieval. The router is then exported for use in other parts of the application.
