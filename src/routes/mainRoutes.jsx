import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../components/login/login";
import Register from "../components/register/register";
import Home from '../components/home/home';
const MainRoutes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to='/' />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  );
};

export default MainRoutes;
