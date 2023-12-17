import React from "react";
import ProductList from "../components/ProductList/ProductList";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <ProductList />
    </div>
  );
};

export default Home;
