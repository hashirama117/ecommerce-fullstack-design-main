import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductDetails from "./screens/ProductDetails";
import Cart from "./screens/Cart";
import ProductList from "./screens/ProductList";
import AdminPanel from "./screens/AdminPanel";
import Profile from "./screens/Profile";
import LoginPage from "./screens/Loginpage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/ProductDetails/:id" element={<ProductDetails />} />
          <Route path="/ProductList/:id" element={<ProductList />} />
          <Route path="/AdminPanel" element={<AdminPanel />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Login" element={<LoginPage />} />
          {/* <Route path="/Register" element={<RegisterPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
