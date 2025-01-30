import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderPage = ({ cart }) => {
  const [updatedCart, setUpdatedCart] = useState(cart);
  const navigate = useNavigate();

  const handleQuantityChange = (index, action) => {
    const newCart = [...updatedCart];
    if (action === "increase") newCart[index].quantity++;
    if (action === "decrease" && newCart[index].quantity > 1) newCart[index].quantity--;
    setUpdatedCart(newCart);
  };

  const calculateTotal = () => {
    return updatedCart
      .reduce((sum, item) => sum + item.quantity * parseFloat(item.price.slice(1)), 0)
      .toFixed(2);
  };

  const handleCheckout = async () => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");  // Fetch the username from localStorage (if available)
    
    if (!token) {
      alert("You must be logged in to place an order.");
      return;
    }

    try {
      const response = await fetch("https://foodapp-1-0ryn.onrender.com/api/orders", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` // Include the token in the headers
        },
        body: JSON.stringify({ 
          items: updatedCart, 
          customerName: username || "Guest"  // Use username or default to "Guest"
        }),
      });
  
      const data = await response.json();
      console.log("Order response:", data); // Log the response data
      if (response.ok) {
        navigate("/order-confirmation", { state: { cart: updatedCart } });
      } else {
        console.error("Order placement error:", data.message);
        alert(data.message);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("Something went wrong during checkout!");
    }
  };

  return (
    <div className="order-page">
      <h1>Your Orders</h1>
      {updatedCart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          {updatedCart.map((item, index) => (
            <div key={index} className="order-item">
              <h2>{item.name}</h2>
              <p>Price: {item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(index, "decrease")}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(index, "increase")}>+</button>
              </div>
            </div>
          ))}
          <h2>Total: ${calculateTotal()}</h2>
          <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default OrderPage;
