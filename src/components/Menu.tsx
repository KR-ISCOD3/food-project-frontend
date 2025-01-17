import BreakFastFood from "./BreakFastFood";
import DinnerFood from "./DinnerFood";
import LunchFood from "./LunchFood";

function Menu() {
  return (
    <div className="container mt-4">
      <h1 className="m-0 text-center">Our <span className="text-success">Menu</span> 🍜</h1>
      <p className="text-center">What do you prefer?</p>
      <BreakFastFood/>
      <LunchFood />  
      <DinnerFood/>
    </div>
  );
}

export default Menu;
