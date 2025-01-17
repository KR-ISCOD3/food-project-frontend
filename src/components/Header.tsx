import { FaCartArrowDown, FaHome } from "react-icons/fa";
// import { HiOutlineLogin } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import {
  MdAccountCircle,
  MdLogout,
  MdOutlineMenuBook,
  MdPermContactCalendar,
} from "react-icons/md";
import { TbHelpSquareFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FoodContext } from "../store/FoodContext";
// import { useAuth } from "../store/AuthContext";  // Import useAuth
// import { useAuth0,LogoutOptions  } from "@auth0/auth0-react";
import Bottombar from "./Bottombar";
import { useAuth } from "../store/ReactAuthContext";


const Header = () => {
  const { user,logout } = useAuth(); // Access user data
  // const { user, logout, loginWithRedirect, isAuthenticated } = useAuth0();
  const [isLoggin, setIsloggin] = useState<boolean>(false);
  const { cart, totalPrice, searchByKhmerName } = useContext(FoodContext);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Check if the user is logged in
  useEffect(() => {
    if (user) {
      setIsloggin(true); // Set isLoggin state to true when user is logged in
    } else {
      setIsloggin(false);
    }
    console.log(user);
  }, [user]);

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery.trim() === "") {
      searchByKhmerName(""); // Reset to show all items
      navigate("/allmenu"); // Navigate to the default menu page
    } else {
      searchByKhmerName(searchQuery); // Perform search
      navigate(`/allmenu?search=${searchQuery}`);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.trim() === "") {
      searchByKhmerName(""); // Reset to show all items
      navigate("/allmenu"); // Navigate to the default menu page
    }
  };

  // // Define the handleLogout function with correct typing for logout options
  // const handleLogout = () => {
  //   const options: LogoutOptions = {
  //     returnTo: window.location.origin, // Provide the returnTo option explicitly
  //   };
  //   logout(options); // Pass the options object to logout
  // };

  const handleLogout = () => {
    logout(); // Logs the user out from Google 
    setIsloggin(false);
    console.log("User logged out");
  };
  return (
    <>
      <nav className="navbar container-fluid p-0 fixed-top bg-green shadow">
        <div className="container p-0 py-3">
          {/*-------- Logo-Website ----------*/}
          <div className="d-flex col-12 col-xl-5 justify-content-between">
            <NavLink
              to={"/"}
              className="navbar-brand d-flex align-items-center col-md-6 col-lg-4 text-light"
            >
              <img src="logo.png" alt="" width={40} />
              <span className="font-logo bg-green">NisetFood</span>
            </NavLink>
            <div className="ms-1 w-100 mt-2">
              <form
                onSubmit={handleSearchSubmit}
                className="d-flex border-0 rounded-5 bg-body-secondary"
              >
                <button className="btn border-0 rounded-0 text-light p-2">
                  <IoSearch className="text-dark ms-1" />
                </button>
                <input
                  type="text"
                  placeholder="What are you looking for..."
                  className="form-control rounded-0 shadow-none border-0 px-0 bg-transparent"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </form>
            </div>
          </div>

          {/*-------- Menu-Data ----------*/}
          <div className="d-flex">
            <ul className="nav d-xl-flex d-none">
              <li className="text-center text-light">
                <NavLink
                  to={"/"}
                  className="nav-link py-1 bg-gree text-light d-grid"
                >
                  <FaHome className="fs-5 mx-auto" />
                  Home
                </NavLink>
              </li>
              <li className="text-center text-light">
                <NavLink
                  to={"/allmenu"}
                  className="nav-link py-1 bg-gree text-light d-grid"
                >
                  <MdOutlineMenuBook className="fs-5 mx-auto" />
                  Menu
                </NavLink>
              </li>
              <li className="text-center text-light">
                <NavLink
                  to={"/contact"}
                  className="nav-link py-1 bg-gree text-light d-grid"
                >
                  <MdPermContactCalendar className="fs-5 mx-auto" />
                  Contact
                </NavLink>
              </li>
            </ul>

            {/*-------- cart ----------*/}
            <div className="d-none d-xl-flex align-items-center">
              <div className="text-center text-light border-start ps-3 position-relative">
                <NavLink
                  to={"/cart"}
                  className="nav-link py-0 bg-gree text-light"
                >
                  <FaCartArrowDown className="fs-5 " />
                </NavLink>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length > 100 ? "99+" : cart.length}
                </span>
              </div>
              <p className="m-0 ms-3 fs-5 text-light">
                ${totalPrice.toFixed(2)}
              </p>
            </div>

            {/* ------ Login-feild ------- */}

            {isLoggin ? (
              <div className="d-xl-flex d-none ms-3 align-items-center ">
                <div className="d-flex align-items-center">
                  <div className="user-account rounded-circle overflow-hidden border border-2">
                    <img
                      src={user?.picture || "default-avatar.png"} // Display user avatar
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                  <div className="dropdown">
                    <button
                      className="btn border-0 dropdown-toggle bg-gree text-light"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      {user?.name}
                    </button>
                    <ul className="dropdown-menu p-0 pt-2 rounded-3 overflow-hidden">
                      <li>
                        <NavLink
                          to={"/my-account"}
                          className="nav-link text-dark py-2 px-2 fs-6 align-middle"
                        >
                          <MdAccountCircle className="me-2 fs-5" />
                          My Account
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"#"}
                          className="nav-link text-dark py-2 px-2 fs-6 align-middle"
                        >
                          <TbHelpSquareFilled className="me-2 fs-5" />
                          Help Center
                        </NavLink>
                      </li>
                      <button
                        className="btn border-0 border-top rounded-0 text-center text-light w-100 fs-6 bg-secondary-subtle pb-2 text-dark"
                        onClick={()=>handleLogout()} // Log out the user
                      >
                        <MdLogout className="me-2 fs-5" />
                        Log Out
                      </button>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="d-none d-lg-flex align-items-center mx-3">
              
                <NavLink to={"/signin"}>
                  <button className="btn btn-outline-light rounded-5 px-4 me-2 rounded-0">
                    Get Start
                  </button>
                </NavLink>
   
                {/* <NavLink to={"/signup"}>
                  <button className="btn btn-light rounded-5 px-4">
                    Sign Up
                  </button>
                </NavLink> */}
              </div>
            )}
          </div>
        </div>
      </nav>
      <Bottombar />
    </>
  );
};

export default Header;
