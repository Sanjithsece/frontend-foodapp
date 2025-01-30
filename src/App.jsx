import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import MenuPage from "./components/MenuPage";
import OrderPage from "./components/OrderPage";
import CheckoutConfirmation from "./components/CheckoutConfirmation";
import AuthPage from "./components/AuthPage";

const App = () => {
  const [cart, setCart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [message, setMessage] = useState("");

  const handleAddToCart = (item) => {
    console.log("Adding item to cart:", item);
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
    setMessage("Item added to cart!");
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div>
      <Header />
      <Routes>
        
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<MenuPage handleAddToCart={handleAddToCart} />} />
            <Route path="/orders" element={<OrderPage cart={cart} />} />
            <Route path="/order-confirmation" element={<CheckoutConfirmation />} />
            <Route path="*" element={<Home />} /> 
          </>
        
      </Routes>
      {message && <div style={popupStyles}>{message}</div>}
    </div>
  );
};

const popupStyles = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  background: "#333",
  color: "#fff",
  padding: "30px",
  borderRadius: "15px",
  boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
};

export default App;