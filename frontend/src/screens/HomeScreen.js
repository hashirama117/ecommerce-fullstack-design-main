/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../ScreenStyling/HomeScreen.css";
import HomeEquipments from "../components/HomeEquipments";
import HomeProducts from "../components/HomeProducts";
import HomeAccessories from "../components/HomeAccessories";
import FormComponent from "../components/FormComponent";

const HomePage = () => {
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
              Gift box
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

      {/* banner Section */}
      <div className="container-fluid outer-container1">
        <div className="inner-container1 d-flex flex-row gap-0">
          <div className="v-menu">
            <ul className="vertical-menu">
              <li>
                <a href="#">AutoMobiles</a>
              </li>
              <li>
                <a href="#">Clothes and Wear</a>
              </li>
              <li>
                <a href="#">Homw interiors</a>
              </li>
              <li>
                <a href="#">Computer and tech</a>
              </li>
              <li>
                <a href="#">Tools, equipments</a>
              </li>
              <li>
                <a href="#">Animal and pets</a>
              </li>
              <li>
                <a href="#">Machinery tools</a>
              </li>
              <li>
                <a href="#">More category</a>
              </li>
            </ul>
          </div>
          <div className="b-menu">
            <div
              className="banner-content"
              style={{
                backgroundImage: `url("/images/banner.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "330px",
                borderRadius: "6px",
              }}
            >
              <p
                className="banner-title"
                style={{
                  paddingTop: "20px",
                  margin: "0px 0px 10px 20px",
                  fontSize: "20px",
                  fontWeight: "normal",
                }}
              >
                Latest Trendings
              </p>
              <p
                className="banner-description"
                style={{ marginLeft: "20px", fontSize: "28px" }}
              >
                Electronic Items
              </p>
              <Link
                to="/ProductsDetails"
                className="btn"
                // style={{
                //   color: "black",
                //   margin: "20px 20px",
                //   backgroundColor: "white",
                // }}
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="c-menu">
            <div className="profile-card">
              <p>this is profile section</p>
            </div>
            <div className="offer1">
              <p>this is offer section</p>
            </div>
            <div className="offer2">
              <p>this is offer section</p>
            </div>
          </div>
        </div>
      </div>
      <HomeProducts />
      <HomeEquipments />
      <HomeAccessories />
      <FormComponent />
    </>
  );
};

export default HomePage;
