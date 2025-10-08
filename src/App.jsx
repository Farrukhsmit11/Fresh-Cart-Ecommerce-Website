import Loader from "./components/loader/Loader"
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import { Route, Routes } from "react-router-dom"
import SignIn from "./pages/auth/signIn/SignIn"
import HeroCards from "./components/heroCards/HeroCards"
import Wishlist from "./components/wishlist/Wishlist"
import CategoryDetail from "./pages/categoryDetail/CategoryDetail"



function App() {
  const [loading, setLoading] = useState(true);

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
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/" element={<HeroCards />}></Route>
        <Route path="/categorydetail" element={<CategoryDetail />}></Route>
      </Routes>



      <Footer />
    </>
  );
}

export default App;
