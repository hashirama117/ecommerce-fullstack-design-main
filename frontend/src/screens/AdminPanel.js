// AddProduct.jsx
import React, { useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    stock: "",
    category: "",
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that all fields are filled
    if (!image) {
      alert("Please select an image file");
      return;
    }

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("price", form.price);
    formData.append("description", form.description);
    formData.append("stock", form.stock);
    formData.append("category", form.category);
    formData.append("image", image); // Append the file

    try {
      const response = await axios.post(
        "http://localhost:5000/api/products",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
      console.log("Product created successfully:", response.data);
      alert("Product added successfully!");
      // Reset form
      setForm({
        name: "",
        price: "",
        description: "",
        stock: "",
        category: "",
      });
      setImage(null);
      setImagePreview(null);
    } catch (error) {
      console.error(
        "Error creating product:",
        error.response?.data || error.message,
      );
      alert("Failed to add product");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        onChange={handleChange}
        placeholder="Name"
        value={form.name}
      />
      <input
        name="price"
        onChange={handleChange}
        placeholder="Price"
        value={form.price}
      />
      <input
        name="description"
        onChange={handleChange}
        placeholder="Description"
        value={form.description}
      />
      <input
        name="stock"
        onChange={handleChange}
        placeholder="Stock"
        value={form.stock}
      />
      <input
        name="category"
        onChange={handleChange}
        placeholder="Category"
        value={form.category}
      />
      <input type="file" onChange={handleImageChange} accept="image/*" />
      {imagePreview && (
        <div>
          <p>Image Preview:</p>
          <img
            src={imagePreview}
            alt="preview"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      )}
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AdminPanel;
