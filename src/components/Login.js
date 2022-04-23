import axios from "axios";
import React, { useState } from "react";
import "../App.css";

const Login = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      //setUser(data);
    } catch {
      setError(true);
    }
    setLoading(false);
  };
  return (
    <div className="logged">
      <span className="user">{user.name}</span>
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
        <button
          disabled={!name || !password}
          type="submit"
          onClick={handleClick}
        >
          {loading ? "please wait" : "Submit"}
        </button>{" "}
        <br /> <br />
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
