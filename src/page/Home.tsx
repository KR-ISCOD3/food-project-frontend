import { useEffect } from "react";
import Direction from "../components/Direction";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import OurShop from "../components/OurShop";
import PaymentPartner from "../components/PaymentPartner";
import Serve from "../components/Serve";

const Home = () => {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  })
  return (
    <div style={{ paddingTop: "130px" }} className="container-fluid px-0">
        <div className="container">
          <Hero/>
        </div>
        <Serve/>
        <OurShop/>
        <div className="container">
          <Direction/>
        </div>
        <Menu/>
        <PaymentPartner/>
    </div>
  );
};
export default Home;
