import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styling/FormComponent.css"; // Import the CSS file for styling
import "../Styling/HomeEquipments.css"; // Import the CSS file for styling
const FormComponent = () => {
  return (
    <div className="outer-container3">
      <div className="inner-container3">
        <div
          className="image-container"
          style={{
            position: "relative",
            width: "100%",
            height: "auto",
          }}
        >
          <img
            src="./images/formbg.png"
            alt="formcover"
            className="form-cover"
            style={{
              backgroundImage: `url("/images/formcover.png")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "auto",
              display: "flex",
            }}
          />
          <div
            className="text-overlay"
            style={{
              position: "absolute",
              top: "25%",
              left: "18%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontSize: "30px",
              fontWeight: "normal",
              textAlign: "left",
            }}
          >
            An easy way to send <br /> requests to your suppliers
          </div>
          <div
            className="text-overlay"
            style={{
              position: "absolute",
              top: "5%",
              right: "5%",
              color: "white",
              fontSize: "20px",
              fontWeight: "normal",
              textAlign: "left",
            }}
          >
            <div className="form-container">
              <h2 className="form-title">Send quote to suppliers</h2>

              <input
                type="text"
                placeholder="What item you need?"
                className="form-input"
              />

              <textarea
                placeholder="Type more details"
                rows={3}
                className="form-textarea"
              ></textarea>

              <div className="form-row">
                <input
                  type="number"
                  placeholder="Quantity"
                  className="form-input half"
                />
                <select className="form-input unit-select">
                  <option>Pcs</option>
                  <option>Kg</option>
                  <option>Box</option>
                </select>
              </div>

              <button className="form-button">Send inquiry</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormComponent;
