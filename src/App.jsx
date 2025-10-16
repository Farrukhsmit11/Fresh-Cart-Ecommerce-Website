import Loader from "./components/loader/Loader"
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom"
import SignIn from "./pages/auth/signIn/SignIn"
import { Navbar, Wishlist } from "./components";
import CategoryDetail from "./pages/categoryDetail/CategoryDetail"
import Home from "./pages/home/Home";

function App() {
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {location.pathname !== "/signin" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/categorydetail" element={<CategoryDetail />}></Route>
      </Routes>

    </>

  );
}

export default App;
