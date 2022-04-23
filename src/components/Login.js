import React, { useState } from "react";
import "../App.css";

const Login = () => {
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="logged">
      <h1>This is your Login screen</h1>
      <form>
        <input
          type="text"
          placeholder="username"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{" "}
        <br /> <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />{" "}
        <br /> <br />
        <button disabled="true">Submit</button> <br /> <br />
        <span
          data-testid="error"
          style={{ color: "red", visibility: error ? "visible" : "hidden" }}
        >
          Something went Wrong!!!
        </span>
      </form>
    </div>
  );
};

export default Login;
