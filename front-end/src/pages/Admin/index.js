import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./styles.css";
function Admin() {
  return (
    <div>
      <header>
        <nav>
          <ul className="admin-menu">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/orders">Orders</NavLink>
            </li>
            <li>
              <NavLink to="/products">About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
export default Admin;
