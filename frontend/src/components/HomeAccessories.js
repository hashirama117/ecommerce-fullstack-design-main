import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../ScreenStyling/HomeScreen.css";
import "../Styling/HomeEquipments.css";

const HomeAccessories = () => {
  const items = [
    { title: "Smartwatch", price: 19, image: "/images/smartwatch.jpg" },
    { title: "gaming set", price: 19, image: "/images/appliance2.jpg" },
    { title: "laptop", price: 19, image: "/images/gaminglaptop.jpg" },
    { title: "tablet", price: 19, image: "/images/appliance3.jpg" },
    { title: "Kettle", price: 100, image: "/images/appliance1.jpg" },
    { title: "smartphone", price: 39, image: "/images/phone.jpg" },
    {
      title: "wireless headset",
      price: 19,
      image: "/images/wirelessheadphones.jpg",
    },
    { title: "camera", price: 10, image: "/images/camera.jpg" },
  ];
  return (
    <>
      <div className="outer-container3">
        <div className="container-fluid inner-container3 d-flex flex-row gap-0">
          {/* Sidebar */}
          <div
            className="sidebar"
            style={{
              flex: 1.09,
              backgroundImage: `url("/images/appliance.png")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "auto",
              width: "100%",
              display: "flex",
            }}
          >
            <h2>
              Consumer <br /> electronics and <br /> Gadgets
            </h2>
            <button>Source now</button>
          </div>

          {/* Product Cards */}
          <div className="items-grid">
            {items.map((item, index) => (
              <div key={index} className="item-card">
                <div className="item-content">
                  <div className="item-details">
                    <h3>{item.title}</h3>
                    <p className="from-text">From</p>
                    <p className="price">USD {item.price}</p>
                  </div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="item-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAccessories;
