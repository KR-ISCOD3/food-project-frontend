import { useEffect } from "react";
import BreakFastFood from "./BreakFastFood";
import DinnerFood from "./DinnerFood";
import LunchFood from "./LunchFood";

function Menu() {
  useEffect(()=>{
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    })
  return (
    <div className="container mt-4">
      <h1 data-aos="zoom-in" className="m-0 text-center">Our <span className="text-success">Menu</span> 🍜</h1>
      <p data-aos="zoom-in"  className="text-center">What do you prefer?</p>
      <BreakFastFood/>
      <LunchFood />  
      <DinnerFood/>
    </div>
  );
}

export default Menu;
