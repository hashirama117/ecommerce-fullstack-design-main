import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../ScreenStyling/ProductList.css"; // Import CSS for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.statusText}`);
        }
        const data = await response.json();
        setProducts(data.data || []);
        console.log("Fetched products:", data.data); // Log the fetched products
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {/* Navbar */}
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
            <Link className="nav-link" to="ProductList">
              All category
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#womens">
              Hot offers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#kids">
              Gift boxes
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#accessories">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#accessories">
              Menu Items
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#accessories">
              Help
            </Link>
          </li>
        </ul>
        {/* </div> */}
      </nav>
      <div className="outer-container4">
        <div className="category-list">
          <p>Category</p>
        </div>
        <div className="product-list">
          <h1>Product Listing</h1>
          <div className="product-grid">
            {products && products.length > 0 ? (
              products.map((product) => {
                const ImageSrc = product.image
                  ? `http://localhost:5000${product.image}`
                  : "placeholder.jpg";

                return (
                  <>
                    <div key={product._id} className="product-card2">
                      <img
                        src={ImageSrc}
                        alt={product.name}
                        className="product-image2"
                      />
                      <div className="product-info">
                        <h2>{product.name}</h2>
                        <p>${product.price}</p>
                        <p>{product.description}</p>
                        <p>{product.category}</p>
                        <p>{product.stock}</p>
                        <Link
                          to={`/ProductDetails/${product._id}`}
                          className="details-button"
                        >
                          View Details
                        </Link>
                      </div>
                      <button
                        className="cart-button"
                        onClick={() => {
                          // Add product to cart logic
                          const cart =
                            JSON.parse(localStorage.getItem("cart")) || [];
                          cart.push(product);
                          localStorage.setItem("cart", JSON.stringify(cart));
                          alert(`${product.name} has been added to the cart!`);
                        }}
                      >
                        <FontAwesomeIcon
                          className="heart-icon"
                          icon={faHeart}
                        />
                      </button>
                    </div>
                  </>
                );
              })
            ) : (
              <p>No products available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
