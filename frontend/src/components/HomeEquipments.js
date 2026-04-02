import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../ScreenStyling/HomeScreen.css";
import "../Styling/HomeEquipments.css";

const HomeEquipments = () => {
  const items = [
    { title: "Soft chairs", price: 19, image: "/images/sofa.png" },
    { title: "Sofa & chair", price: 19, image: "/images/2.jpg" },
    { title: "Kitchen dishes", price: 19, image: "/images/3.jpg" },
    { title: "plants", price: 19, image: "/images/4.jpg" },
    { title: "Kitchen mixer", price: 100, image: "/images/5.jpg" },
    { title: "coffee maker", price: 39, image: "/images/6.jpg" },
    { title: "Home appliance", price: 19, image: "/images/7.jpg" },
    { title: "Blenders", price: 10, image: "/images/8.jpg" },
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
              backgroundImage: `url("/images/equipments.png")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "auto",
              width: "100%",
              display: "flex",
            }}
          >
            <h2>
              Home and <br /> outdoor
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

export default HomeEquipments;
