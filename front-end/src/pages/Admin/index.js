import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles.css";
import { Box } from "@chakra-ui/react";

import Home from "./Home";
import Orders from "./Orders";
import Products from "./Products";
import { Divider } from "antd";
import AdminProductDetail from "./ProductDetail";

function Admin() {
  return (
    <div>
    <Divider type="vertical" />
    <Link to="home">Home</Link>
    <Divider type="vertical" />
    <Link to="products">Products</Link>
    <Divider type="vertical" />
    <Link to="orders">Orders</Link>
    
      <Box mt="5">
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route  path="/products" element={<Products />} />
          <Route  path="/products/:product_id" element={<AdminProductDetail />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Box>
    </div>
  );
}
export default Admin;
