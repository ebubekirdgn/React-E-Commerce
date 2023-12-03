import React from "react";
import { Link,useMatch } from "react-router-dom";
import "./styles.css";


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
    </div>
  );
}
export default Admin;
