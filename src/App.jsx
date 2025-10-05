import Loader from "./components/loader/Loader"
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import HeroCards from "./components/heroCards/HeroCards"
import Footer from "./components/footer/Footer";
import Wishlist from "./components/wishlist/Wishlist";
import SignIn from "./pages/auth/signIn/Signin"
import CategoryDetail from "./pages/categorydetail/CategoryDetail";


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


      {/* <DailyBestSells /> */}
      <Footer />

    </>
  );
}

export default App;
