import React, { useState } from "react";
import emailjs from "emailjs-com";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", { name, email, message });

    // Create the data to send in the email
    const feedback = {
      name,
      email,
      message,
    };

    // Send email using EmailJS
    emailjs
      .send("service_vye4lad", "template_ylu876k", feedback, "93w7Sw4tdlOjcDJbo")
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          alert("Message sent successfully!");
          
          // Reset form fields after successful submission
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Error sending message: " + error.text);
        }
      );
  };

  return (
    <div className="container">
      {/* Main page */}
      <main className="main">
        {/* Home page content */}
        <div className="left-section">
          <h1>Welcome to Foodie's</h1>
          <p>
            Discover a culinary paradise where every dish is crafted with love,
            passion, and the finest ingredients. At Foodie's Haven, we bring
            you a fusion of traditional recipes and modern twists that will
            tantalize your taste buds.
          </p>
          <p>
            Each dish is thoughtfully crafted to bring out the richness of authentic tastes while adding a contemporary twist that keeps things exciting.
            Whether you crave the comfort of homemade classics or the thrill of gourmet delicacies.
            Join us for an unforgettable dining experience where every bite tells a story of passion, craftsmanship, and an undying love for food.
          </p>
        </div>
        {/* img section */}
        <div className="right-section">
          <img
            src="./home img.jpg"
            alt="Delicious food"
          />
        </div>
      </main>

      {/* Special Offers */}
      <section className="specials">
        <h2>Our Special Offers</h2>
        <div className="special-cards">
          <div className="card">
            <h3>Weekend Brunch</h3>
            <p>Relish an exclusive brunch menu every weekend, featuring fresh flavors at a delightful 20% discount!</p>
          </div>
          <div className="card">
            <h3>Family Feast</h3>
            <p>Share love and laughter with our family meal package, complete with a complimentary dessert to sweeten your day.</p>
          </div>
          <div className="card">
            <h3>Happy Hours</h3>
            <p>Unwind with your favorite drinks at 50% off! Available daily from 4 PM to 6 PM—don’t miss it.</p>
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="contact">
        <h2>Review</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h3>About Foodie's</h3>
        <p>
          At Foodie's, we transform meals into moments of joy. With a
          vibrant ambiance, fresh ingredients, and recipes that span the globe,
          we aim to create unforgettable dining experiences. Step in, savor the
          flavors, and let us take you on a culinary journey!
        </p>
        <p>&copy; 2025 Foodie's. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
