import React from "react";
import styles from "./styles.module.css";
import {
  Button,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useBasket } from "../../contexts/BasketContext";

function Navbar() {
  const { loggedIn, logout, user } = useAuth();
  const navigate = useNavigate();
  const { items } = useBasket();

  const handleLogout = async () => {
    logout(() => {
      navigate("/");
    });
  };
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
            <Menu>
              <MenuButton as={Button} colorScheme="blue">
                Profile
              </MenuButton>
              <MenuList>
                <MenuGroup title="Profile">
                  <MenuItem to="/admin">
                    <Avatar
                      name="Prosper Otemuyiwa"
                      src="https://bit.ly/prosper-baba"
                    />
                    {user.email}
                  </MenuItem>
                  <MenuItem>Ayarlar </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
            {items.length > 0 && (
              <Link to="/basket">
                <Button colorScheme="pink" variant="outline">
                  Basket ({items.length})
                </Button>
              </Link>
            )}
            &nbsp;
            {user?.role === "admin" && (
              <Link to="/admin">
                <Button colorScheme="blue" variant="outline">
                  Admin
                </Button>
              </Link>
            )}
          </>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
