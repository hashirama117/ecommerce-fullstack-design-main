import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error in getting products", error.message);
    res.status(500).json({ success: false, message: "internal server error" });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params; // Extract the product ID from the request parameters

  // Validate the ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid ID" });
  }

  try {
    // Find the product by ID
    const product = await Product.findById(id);

    // If the product is not found, return a 404 error
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    // Return the product details
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.error("Error in fetching product by ID:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const createProduct = async (req, res) => {
  console.log("Request Body:", req.body); // Log the request body
  console.log("File Info:", req.file); // Log the file info
  console.log("file path", `/uploads/images/${req.file.filename}`); // Log the file path
  const { name, price, description, category, stock, image } = req.body;

  if (!name || !price || !description || !category || !stock || !req.file) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    const newProduct = new Product({
      name,
      price,
      description,
      category,
      stock,
      image: `/uploads/images/${req.file.filename}`,
    });

    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in uploading product:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  let updateData = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "invalid id" });
  }

  // If a new image is uploaded, include it in the update
  if (req.file) {
    updateData.image = `/uploads/images/${req.file.filename}`;
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "product updated",
      data: updatedProduct,
    });
  } catch (error) {
    console.error("Error in updating product", error.message);
    res.status(500).json({ success: false, message: "product not found" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "invalid id" });
  }
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "product deleted" });
  } catch (error) {
    console.error("Error in deleting product", error.message);
    res.status(500).json({ success: false, message: "server error" });
  }
};
