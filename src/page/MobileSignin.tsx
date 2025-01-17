import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function MobileSignin() {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.innerWidth > 992) {
      navigate("/");
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <div
      style={{ padding: "220px 0px" }}
      className="container d-grid align-self-center d-lg-none "
    >
      <div className=" col-8 mx-auto d-grid text-center p-3 rounded-3 shadow">
        <NavLink to={"/signin"}>
          <button className="btn btn-outline-success rounded-5 px-5 mb-3 rounded-0  ">
            Sign in
          </button>
        </NavLink>
        <NavLink to={"/signup"}>
          <button className="btn btn-success rounded-5 px-5">Sign Up</button>
        </NavLink>
      </div>
    </div>
  );
}

export default MobileSignin;
