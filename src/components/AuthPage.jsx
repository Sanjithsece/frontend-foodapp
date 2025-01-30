import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = ({ setIsAuthenticated }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "", username: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "/api/login" : "/api/signup";
    const payload = isLogin ? { email: formData.email, password: formData.password } : formData;
  
    try {
      const response = await fetch(`https://foodapp-1-0ryn.onrender.com${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
  
      const data = await response.json();
      if (response.ok) {
        if (isLogin) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("username", data.username);  // Save username to localStorage
          setIsAuthenticated(true);
          navigate("/home");
        } else {
          alert("Signup successful! Please log in.");
          setIsLogin(true);
        }
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="auth-page">
      <form onSubmit={handleSubmit}>
        <h2>{isLogin ? "Login" : "Signup"}</h2>
        {!isLogin && (
          <div className="form-group">
            <label>Username</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} required />
          </div>
        )}
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">{isLogin ? "Login" : "Signup"}</button>
        <p onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}</p>
      </form>
    </div>
  );
};

export default AuthPage;
