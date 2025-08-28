import Loading from "./components/loader/Loading";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import ImageSlider from "./components/imageslider/ImageSlider";
import Categories from "./components/category/Categories";

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
    </>
  );
}

export default App;
