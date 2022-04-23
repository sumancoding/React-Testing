import React from "react";
import "../App.css";

const login = () => {
  return (
    <div className="logged">
      <h1>This is your Login screen</h1>
      <form>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default login;
