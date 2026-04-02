import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CountdownTimer from "../components/CountDownTimer";
import "../ScreenStyling/HomeScreen.css";
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "25% off",
    description: "High-quality wireless headphones with noise cancellation.",
    image: "/images/wirelessheadphones.jpg",
  },
  {
    id: 2,
    name: "Smartphone",
    price: "25% off",
    description: "Latest model smartphone with cutting-edge features.",
    image: "/images/Phone.jpg",
  },
  {
    id: 3,
    name: "Gaming Laptop",
    price: "25% off",
    description: "Powerful gaming laptop with high-performance graphics.",
    image: "/images/gaminglaptop.jpg",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: "25% off",
    description: "Stylish smartwatch with fitness tracking features.",
    image: "/images/smartwatch.jpg",
  },
  {
    id: 5,
    name: "Professional Camera",
    price: "25% off",
    description: "High-resolution camera for capturing stunning photos.",
    image: "/images/camera.jpg",
  },
];
const HomeProducts = () => {
  return (
    <div className="outer-container2">
      <div className="container-fluid inner-container2 d-flex flex-row gap-1">
        <h1
          className="text-center custom-padding-right"
          style={{ fontSize: "20px" }}
        >
          Deals and Offers
          <p style={{ color: "grey", textAlign: "center", fontSize: "15px" }}>
            Hygiene Equipments
          </p>
          <CountdownTimer targetDate="2025-04-10T00:00:00" />
        </h1>
        {/* Featured Products */}
        <div className="container-fluid featured-products d-flex flex-row justify-content-end flex-nowrap">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                className="product-image"
                alt={product.name}
              />
              <div className="card-body text-center">
                <h5 className="product-title">{product.name}</h5>
                <p className="product-price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HomeProducts;
