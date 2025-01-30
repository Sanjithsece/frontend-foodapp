import React from "react";
import { useLocation } from "react-router-dom";

const CheckoutConfirmation = () => {
  const location = useLocation();
  const { cart } = location.state || {};

  return (
    <div className="checkout-confirmation">
      <h1>✅Order Confirmed!</h1>
      <p>Thank you for your purchase.</p>
      {cart && cart.length > 0 && (
        <>
          <h2>Order Summary:</h2>
          {cart.map((item, index) => (
            <p key={index}>
              {item.name} - {item.quantity} pcs - {item.price}
            </p>
          ))}
        </>
      )}
    </div>
  );
};

export default CheckoutConfirmation;
