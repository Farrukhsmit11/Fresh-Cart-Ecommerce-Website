import Loader from "./components/loader/Loader"
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import AppRoutes from "./routes/appRoutes/AppRoutes"


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
      
      <AppRoutes />
      <Footer />

    </>
  );
}

export default App;
