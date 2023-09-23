import React from "react";
import styles from "./styles.module.css" 

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className="logo">
          <Link to="/">E-COMMERCE</Link>
        </div>

        <ul className={styles.menu}>
          <li>
            <Link to="/">Products</Link>
          </li>
        </ul>
      </div>

      <div className="right">RIGHT</div>
    </nav>
  );
}

export default Navbar;
