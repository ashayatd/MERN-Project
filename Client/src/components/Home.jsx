import React from "react";
import {Link, Outlet } from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
    <div>
      <nav id="navbar">
        <Link Link to="/">Home</Link>
        <Link Link to="/login">Login</Link>
        <Link Link to="/register">Register</Link>
      </nav>
      <Outlet/>
    </div>
  );
};

export default Home;
