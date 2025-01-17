import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
function SignUp() {
  return (
    <div className="container-fluid d-grid align-content-center font-afacad">
      <div className="col-12 col-md-5 col-lg-3 mx-auto p-3 pt-5">
        <h1 className="text-center font-bold m-0">Create an account</h1>
        <p className="text-center mb-3 ">Connect with your friends today!</p>
        <form action="" className="border-b-2 pb-10">
          <input
            type="text"
            className="form-control shadow-none border border-1 my-3"
            placeholder="Enter Your Username"
          />
          <input
            type="text"
            className="form-control shadow-none border border-1 my-3"
            placeholder="Enter Your Email"
          />
          <input
            type="text"
            className="form-control shadow-none border border-1 my-3"
            placeholder="Enter Your Phone Number"
          />
          <input
            type="text"
            className="form-control shadow-none border border-1 my-3"
            placeholder="Enter Your Password"
          />
          <button className="btn text-center w-100 btn-success">Sign Up</button>
        </form>
        <p className="text-center pt-1 border-top mt-3">Or With</p>
        <button className="btn d-flex align-items-center justify-content-center w-100 btn-outline-dark py-2">
          <FcGoogle className="fs-3 me-3" />
          Sign Up with Google
        </button>
        <p className="text-center mt-3">
          Already have an account?{" "}
          <NavLink to={"/signin"} className="text-primary text-decoration-none">
            Sign in
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
