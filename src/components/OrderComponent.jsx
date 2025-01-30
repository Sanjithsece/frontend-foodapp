import React from "react";

const OrderComponent = () => {
  const placeOrder = async (orderDetails) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch("https://foodapp-1-0ryn.onrender.com/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` // Include the token in the headers
        },
        body: JSON.stringify(orderDetails),
      });

      const data = await response.json();
      console.log("Order response:", data); // Log the response data
      if (response.ok) {
        alert("Order placed successfully!");
      } else {
        console.error("Order placement error:", data.message);
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <button onClick={() => placeOrder({ /* order details */ })}>Place Order</button>
    </div>
  );
};

export default OrderComponent;
