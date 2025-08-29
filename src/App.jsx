import Loading from "./components/loader/Loading";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import ImageSlider from "./components/imageslider/ImageSlider";
import Categories from "./components/category/Categories";
import Cards from "./components/cards/Cards";

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
      <ImageSlider />
      <Categories />
      <Cards />
    </>
  );
}

export default App;
