// import React from "react";

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
  console.log(data);

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
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "40vw",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={data.name}
          onChange={handleInput}
        />
        <span style={{ color: "red" }}>{errors.name}</span>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={data.username}
          onChange={handleInput}
        />
        <span style={{ color: "red" }}>{errors.username}</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={data.email}
          onChange={handleInput}
        />
        <span style={{ color: "red" }}>{errors.email}</span>
        <input
          type="tel"
          placeholder="Mobile"
          name="mobile"
          value={data.mobile}
          onChange={handleInput}
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
          <label htmlFor="checkbox">
            Share my registration data with Superapp
          </label>
        </div>
        <span style={{ color: "red" }}>{errors.checkbox}</span>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Home;
