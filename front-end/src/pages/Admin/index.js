import React from "react";
import { Link, Outlet, Route, Routes, useMatch } from "react-router-dom";
import "./styles.css";
import { Box, Switch } from "@chakra-ui/react";

import Home from "./Home";
import Orders from "./Orders";
import Products from "./Products";

function Admin() {
  useMatch("/admin");
  return (
    <div>
      <nav>
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
      </nav>
      <Box mt="10">
        <Switch>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </Switch>
      </Box>
    </div>
  );
}
export default Admin;
