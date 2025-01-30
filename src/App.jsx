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
    {message && <div style={popupStyles}>{message}</div>}
  };

  return (
    <div>
      <Header />
      <Routes>
        {!isAuthenticated ? (
          <Route path="*" element={<AuthPage setIsAuthenticated={setIsAuthenticated} />} />
        ) : (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<MenuPage handleAddToCart={handleAddToCart} />} />
            <Route path="/orders" element={<OrderPage cart={cart} />} />
            <Route path="/order-confirmation" element={<CheckoutConfirmation />} />
            <Route path="*" element={<Home />} /> 
          </>
        )}
      </Routes>
    </div>
  );
  
};

export default App;