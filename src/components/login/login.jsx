import React from "react";
import '../../styles/global/input.css'
import '../../styles/global/button.css'
const Login = () => {
  return (
    <div className="grid grid-cols-1 gap-4 mx-4 ">
      <input
        type="email"
        name="login-email"
        id="login-email"
        placeholder="Email Address"
        className="input"
      />
      <input
        type="password"
        name="login-password"
        id="login-password"
        placeholder="Password"
        className="input"
      />
      <button className="btn btn-primary w-3/12 justify-self-center">
        Login
      </button>
    </div>
  );
};

export default Login;
