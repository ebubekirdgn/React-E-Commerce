import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles.css";
import { Box } from "@chakra-ui/react";

import Home from "./Home";
import Orders from "./Orders";
import Products from "./Products";

function Admin() {
  return (
    <div>
      <header>
        <ul className="admin-menu">
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
          <li>
            <Link to="orders">Orders</Link>
          </li>
        </ul>
      </header>
      <Box mt="5">
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Box>
    </div>
  );
}
export default Admin;
