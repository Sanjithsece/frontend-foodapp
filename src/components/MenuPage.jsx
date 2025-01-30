import React from "react";

const menuItems = [
  { name: "Fried Rice", price: "$10", rating: 4.5, image: "/Fried Rice.jpg" },
  { name: "Biryani", price: "$250", rating: 4.7, image: "/hyderabadi-biryani-recipe-chicken.jpg" },
  { name: "Chicken Tandoori", price: "$350", rating: 4.8, image: "/chicken tandoori.jpg" },
  { name: "Beef Roast", rating: 4.2, price: "$300",image:"/beef roast.jpg" },
  { name: "Stew", rating: 4.0, price: "$200" ,image:"/stew.jpg"},
  { name: "Fish Fry", rating: 4.6, price: "$280" ,image:"/fish fry.jpeg" },
  { name: "Chicken Chilli", rating: 4.3, price: "$320" ,image:"/chicken chilli.jpg"},
  { name: "Mutton Chukka", rating: "4.8", price: "$400" ,image:"/mutton chukka.jpg "},
  { name: "Idiyappam with Paya", rating: 4.4, price: "$270" ,image:" /idiyappam with paya.jpg"},
  { name: "Pizza", rating: 4.7, price: "$500" ,image:"/pizza.jpg"},
  { name: "Burger", rating: 4.3, price: "$150" ,image:"/burger.jpeg"},
  { name: "Noodles", rating: 4.2, price:"$180" ,image:"/noodles.jpeg"}

];

const MenuPage = ({ handleAddToCart }) => {
  return (
    <div className="menu-page">
      <h1>Menu</h1>
      <div className="menu-container">
        {menuItems.map((item, index) => (
          <div className="menu-card" key={index}>
            <img src={item.image} alt={item.name} className="menu-image" />
            <h2>{item.name}</h2>
            <p>Price: {item.price}</p>
            <p>Rating: ⭐{item.rating}</p>
            <button
              className="add-to-cart-button"
              onClick={() => {
                handleAddToCart(item);
               
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
