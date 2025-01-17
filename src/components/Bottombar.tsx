/* -------------- link-accout ------------ */
import { FaHome } from "react-icons/fa";
import { MdAccountCircle, MdPermContactCalendar } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { MdOutlineMenuBook} from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FoodContext } from "../store/FoodContext";
import { useAuth } from "../store/ReactAuthContext";

const Offcanvas = () => {
  const {cart} = useContext(FoodContext)
  const {user} = useAuth()
  const navigate = useNavigate();

  const handleAccountClick = () => {
    if (user) {
      navigate("/my-account"); // Redirect to My Account if logged in
    } else {
      navigate("/page-account"); // Redirect to Account Login if not logged in
    }
  };
  return (
    <div className="container-fluid position-relative p-0 d-xl-none" >
      <div className="fixed-bottom w-100 bg-green border-top" >
        <div className=" container-fluid px-0 py-3 col-md-8 ">
          <ul className="d-flex justify-content-between list-unstyled px-3">
            <li className="text-center">
              <NavLink to={"/"} className="nav-link py-0 text-light">
                  <FaHome className="fs-3 " /> 
                  <br />
                  Home
              </NavLink>
            </li>
            <li className="text-center">
              <NavLink to={"/allmenu"} className="nav-link py-0 text-light">
                  <MdOutlineMenuBook className="fs-3 " />
                  <br />
                  Menu
              </NavLink>
            </li>
            <li className="text-center">
              <NavLink to={"/contact"} className="nav-link py-0 text-light">
                  <MdPermContactCalendar className="fs-3 " />
                  <br />
                  Contact
              </NavLink>
            </li>
            <li className="text-center position-relative ">
               <NavLink to={"/cart"} className="nav-link py-0 text-light">
                <FaCartArrowDown className="fs-3 "/> <br />
                  Cart
                  <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"45px"}}>
                      {cart.length}
                  </span>
                </NavLink>
            </li>
            <li className="text-center">
              <button
                onClick={handleAccountClick}
                className="nav-link py-0 text-light bg-transparent border-0"
                style={{ cursor: "pointer" }}
              >
                <MdAccountCircle className="fs-3" />
                <br />
                Account
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Offcanvas;
