import { useState, useEffect } from "react";
import "./scss/meterial.scss";
import "./scss/header.scss";
import "./scss/app.scss";
import "./scss/hero.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Loading from "./page/Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000); // Show loading for 2 seconds

  //   return () => clearTimeout(timer); // Cleanup the timer
  // }, []);

  return (
    <>
      {isLoading ? (
        <Loading/>
      ) : (
        <div className="container-fluid p-0 font-afacad">
          <Header />
          <div className="p-0">
            <Outlet />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
