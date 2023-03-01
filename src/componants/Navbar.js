import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <Link to={"/weather"}>
        <h2>Weather</h2>
      </Link>
      <Link to={"/products"}>
        <h2>Products</h2>
      </Link>
    </>
  );
};

export default Navbar;
