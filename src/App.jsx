import Loader from "./components/loader/Loader"
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom"
import { Navbar, Wishlist } from "./components";
import CategoryDetail from "./pages/categoryDetail/CategoryDetail"
import Home from "./pages/home/Home";
import "./Mobilequery.css"
import { SignIn, ForgotPassword } from "./pages";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

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
      {location.pathname !== "/signIn" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/categorydetail" element={<CategoryDetail />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
      </Routes>
    </>

  );
}

export default App;
