import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const username = localStorage.getItem("username") || "Guest";

  return (
    <header className="header">
      <h1>Foodie's...</h1>
      <nav className="nav">
        <Link className="nav-link" to="/home">Home</Link>
        <Link className="nav-link" to="/menu">Menu</Link>
        <Link className="nav-link" to="/orders">Orders</Link>
      </nav>
    </header>
  );
};

export default Header;
