import React from "react";

const OrderComponent = () => {
  const placeOrder = async (orderDetails) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch("https://foodapp-1-0ryn.onrender.com/api/place-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` // Include the token in the headers
        },
        body: JSON.stringify(orderDetails),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Order placed successfully!");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      {/* ...existing code... */}
      <button onClick={() => placeOrder({ /* order details */ })}>Place Order</button>
      {/* ...existing code... */}
    </div>
  );
};

export default OrderComponent;
