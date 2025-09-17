import Loading from "./components/loader/Loading";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import ImageSlider from "./components/home/Home";
import Categories from "./components/category/Categories";
import Card from "./components/card/Card";
import PopularProducts from "./components/popularproducts/PopularProducts";
import { Route, Routes } from "react-router-dom";
import Signin from "./pages/auth/sign in/Signin";
import Home from "./components/home/Home";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
      </Routes>

    </>
  );
}

export default App;
