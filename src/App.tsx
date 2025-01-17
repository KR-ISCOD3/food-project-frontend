import { useState, useEffect } from "react";
import "./scss/meterial.scss";
import "./scss/header.scss";
import "./scss/app.scss";
import "./scss/hero.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>

        <div className="container-fluid p-0 font-afacad">
          <Header />
          <div className="p-0">
            <Outlet />
          </div>
          <Footer />
        </div>
    </>
  );
};

export default App;
