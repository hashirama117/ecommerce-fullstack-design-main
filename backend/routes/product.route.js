import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  getProductById,
  updateProduct,
} from "../controllers/productController.js";
import upload from "../config/multerConfig.js";

const router = express.Router();

// get request
router.get("/", getProducts);
//get request by id
router.get("/:id", getProductById);
//post request
router.post("/", upload.single("image"), createProduct);
//put request
router.put("/:id", upload.single("image"), updateProduct);
//delete request
router.delete("/:id", deleteProduct);

export default router;
