import React from "react";
import styles from "./styles.module.css";
import { Button } from "@chakra-ui/react";
import { Link,useNavigate   } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";


function Navbar() {
  const { loggedIn,logout } = useAuth();
  const navigate = useNavigate();
  

  const handleLogout  = async () => {
    logout(() => {
      navigate('/');
    });
  }
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
        {!loggedIn && (
          <>
            <Link to="/signin">
              <Button colorScheme="blue">Login</Button>
            </Link>
            <Link to="/signup">
              <Button colorScheme="green">Register</Button>
            </Link>
          </>
        )}

        {loggedIn && (
          <>
          <Link to="/profile">
              <Button colorScheme="blue">Profile</Button> &nbsp;
              <Button colorScheme="pink" variant="solid" onClick={handleLogout}> Logout </Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
