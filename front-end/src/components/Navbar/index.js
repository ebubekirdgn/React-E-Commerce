import React from "react";
import styles from "./styles.module.css";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link to="/">GeldiGeliyor.com</Link>
        </div>

        <ul className={styles.menu}>
          <li>
            <Link to="/">Products</Link>
          </li>
        </ul>
      </div>

      <div className={styles.right}>
        <Link to="/signin">
          <Button colorScheme="blue">Login</Button>
        </Link>
        <Link to="/signup">
          <Button colorScheme="green">Register</Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
