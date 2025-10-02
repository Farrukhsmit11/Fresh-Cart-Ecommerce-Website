import Loader from "./components/loader/Loader"
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Wishlist from "./components/wishlist/Wishlist";


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
        <Route path="/" element={<Home />}></Route>
      </Routes>



      {/* <DailyBestSells /> */}
      <Footer />

    </>
  );
}

export default App;
