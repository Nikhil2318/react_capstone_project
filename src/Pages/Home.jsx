// import React from "react";
import "./home.css";
import login from "../images/login.png";
import { useState } from "react";

function Home() {
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]:
        e.target.name === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const [errors, setErrors] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    if (!data.name || data.name.trim() === "") {
      errors.name = "Name is required";
    }
    if (!data.username || data.username.trim() === "") {
      errors.username = "Username is required";
    }
    if (!data.email || data.email.trim() === "") {
      errors.email = "Email is required";
    }
    if (!data.mobile || data.mobile.trim() === "") {
      errors.mobile = "Mobile is required";
    }
    if (!data.checkbox) {
      errors.checkbox = "Checkbox is required";
    }
    setErrors(errors);
  };

  return (
    <div className="home-container">
      <div className="left-img">
        <img src={login} alt="login-image" />
        <div className="overlay-text">Discover new things on Superapp</div>
      </div>
      <div className="home">
        <h1 className="h1-text">Super app</h1>
        <p className="h1-p">Create your new account</p>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={data.name}
            onChange={handleInput}
            className={errors.name ? "error" : ""}
          />
          <span style={{ color: "red" }}>{errors.name}</span>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={data.username}
            onChange={handleInput}
            className={errors.username ? "error" : ""}
          />
          <span style={{ color: "red" }}>{errors.username}</span>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={handleInput}
            className={errors.email ? "error" : ""}
          />
          <span style={{ color: "red" }}>{errors.email}</span>
          <input
            type="tel"
            placeholder="Mobile"
            name="mobile"
            value={data.mobile}
            onChange={handleInput}
            className={errors.mobile ? "error" : ""}
          />
          <span style={{ color: "red" }}>{errors.mobile}</span>
          <div>
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              checked={data.checkbox}
              onChange={handleInput}
            />
            <label htmlFor="checkbox" id="check-label">
              Share my registration data with Superapp
            </label>
          </div>
          <span style={{ color: "red" }}>{errors.checkbox}</span>
          <button type="submit" className="submit__button">
            Sign up
          </button>
        </form>
        <div className="terms">
          <p className="terms__login">
            By clicking on Sign up. you agree to Superapp
            <span className="terms-1">Terms and Conditions of Use</span>
          </p>
          <p className="terms__login">
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp
            <span className="terms-1">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
