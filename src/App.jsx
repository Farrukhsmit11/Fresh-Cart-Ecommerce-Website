import Loading from "./components/loader/Loading";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";

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
    </>
  );
}

export default App;
