import { Box, Switch } from '@chakra-ui/react'
import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import "./styles.css";
function Admin() {
  return (
    <div>
      <header>
        <ul className='admin-menu'>
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
      <Outlet />
      {/* <Box mt="10">
        <Switch>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </Switch>
      </Box> */}
    </div>
  )
}

export default Admin