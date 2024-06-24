import React, { useEffect, useState } from "react";
import "../styles/global/input.css";
import "../styles/global/button.css";
import { useLocation } from "react-router-dom";
const Login = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="flex flex-col gap-4 min-h-screen justify-center items-center">
      <div className="grid grid-cols-1 gap-4 mx-4 justify-items-center  ">
        <input
          type="email"
          name="login-email"
          id="login-email"
          placeholder="Email Address"
          className="input"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          name="login-password"
          id="login-password"
          placeholder="Password"
          className="input"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button
          className="btn bg-primary w-3/12 "
          onClick={() => {
            console.log(email);
            console.log(password);
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
