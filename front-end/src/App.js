import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import Products from "./pages/Products";
import ProductDetail from "./pages/Products/ProductDetail";
import ProtectedRoute from "./pages/ProtectedRoute";
import Profile from "./pages/Profile";
import Basket from "./pages/Basket";
import Error404 from "./pages/Error404";
import Admin from "./pages/Admin";
import Orders from "./pages/Admin/Orders";
import Home from "./pages/Admin/Home";
import AdminProducts from "./pages/Admin/Products";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <div id="content">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:product_id" element={<ProductDetail />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="*" element={<Error404 />} />
            
            <Route path="/profile"  element={<ProtectedRoute> <Profile /> </ProtectedRoute>} />

            <Route path="/admin"  exact element={<ProtectedRoute> <Admin/>   </ProtectedRoute>} />
            
            <Route path="/admin/home"   element={<ProtectedRoute> <Home/></ProtectedRoute>} />
            <Route path="/admin/products"   element={<ProtectedRoute><AdminProducts/>  </ProtectedRoute>} />
            <Route path="/admin/orders"   element={<ProtectedRoute> <Orders/> </ProtectedRoute>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
