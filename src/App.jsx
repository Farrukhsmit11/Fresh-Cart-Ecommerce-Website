import Loader from "./components/loader/Loader"
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom"
import { Footer, Navbar, Wishlist } from "./components";
import Home from "./pages/home/Home";
import "./Media.css"
import { SignIn, ForgotPassword, CategoryDetail } from "./pages";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const currentPath = location.pathname

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
      {currentPath === "/" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/categorydetail" element={<CategoryDetail />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
      </Routes>
      <Footer />

    </>

  );
}

export default App;
