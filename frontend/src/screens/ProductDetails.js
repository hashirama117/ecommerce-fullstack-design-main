import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";
import DynamicBreadcrumbs from "../components/BreadCrumbs";
import "../ScreenStyling/ProductDetails.css"; // Import your CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/products/${id}`,
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch product: ${response.statusText}`);
        }
        const data = await response.json();
        setProduct(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found</p>;

  const timestamp = product.updatedAt
    ? new Date(product.updatedAt).getTime()
    : Date.now();
  const imageUrl = product.image.startsWith("http")
    ? `${product.image}?t=${timestamp}`
    : `http://localhost:5000${product.image}?t=${timestamp}`;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light border-bottom border-grey">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="/images/logo.png" // Path to your logo
              alt="Project One Logo"
              style={{ height: "80px" }} // Adjust the height as needed
            />{" "}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto d-flex flex-row justify-content-center gap-3">
              <li className="nav-item">
                <Link className="nav-link" to="/ProductDetails">
                  <img
                    src="/images/profile.png" // Path to your logo
                    alt="profile Logo"
                    style={{ height: "40px" }} // Adjust the height as needed
                  />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ProductsDetails">
                  <img
                    src="/images/Message.png" // Path to your logo
                    alt="Message Logo"
                    style={{ height: "40px" }} // Adjust the height as needed
                  />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#about">
                  <img
                    src="/images/Orders.png" // Path to your logo
                    alt="orders Logo"
                    style={{ height: "40px" }} // Adjust the height as needed
                  />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Cart">
                  <img
                    src="/images/Cart.png" // Path to your logo
                    alt="Cart Logo"
                    style={{ height: "40px" }} // Adjust the height as needed
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Nav List below Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light border-bottom border-grey custom-style">
        {/* <div className="custom-style"> */}
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link" to="#mens">
              Men
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#womens">
              Women
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#kids">
              Kids
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#accessories">
              Accessories
            </Link>
          </li>
        </ul>
        {/* </div> */}
      </nav>
      <DynamicBreadcrumbs />
      <div className="outer-container3">
        <div className="inner-container3">
          <div style={{ padding: "20px" }}>
            <div style={{ display: "flex", gap: "20px" }}>
              <img
                src={imageUrl}
                alt={product.name}
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                  border: " 1px solid #ccc",
                  borderRadius: "10px",
                }}
              />
              <div className="product-details">
                <h2 className="product-name">{product.name}</h2>
                <div className="product-des-style">
                  <h3 className="label">
                    Price:
                    <span className="value">${product.price}</span>
                  </h3>
                </div>
                <button
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "white",
                    color: "#007BFF",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    alignSelf: "center",
                    marginTop: "50px",
                  }}
                  onClick={() => alert("Added to cart!")}
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ marginRight: "10px" }}
                  />
                  save for later
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="outer-container3">
        <div className="inner-container3">
          <p>{product.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
