import { useEffect, useState } from "react";
import { IoIosCamera } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/ReactAuthContext";
import { MdLogout } from "react-icons/md";

function Account() {
  const { user,logout } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    tel: "",
    dob: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    district: "",
    zip: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogout = () => {
    logout(); // Logs the user out from Google 
    console.log("User logged out");
    navigate('/')
  };

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  

  return (
    <>
      <div
        data-aos="zoom-in"
        className="container d-grid justify-content-center"
        style={{ paddingTop:"130px" }}
      >
        <div className="text-center mb-3">
          <div
            style={{
              width: 80,
              height: 80,
            }}
            className="bg-success mx-auto rounded-circle overflow-hidden border border-2"
          >
            <img
              src={user?.picture}
              alt="User Avatar"
              className="w-100 h-100 object-fit-cover"
            />
          </div>
          <button className="btn btn-success px-4 py-1 mt-2 rounded-5 d-flex align-items-center">
            <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
              Upload <IoIosCamera className="fs-5 mb-1" />
            </label>
            <input id="fileInput" type="file" className="d-none" />
          </button>
        </div>
      </div>

      <div data-aos="zoom-in" className="container col-md-10 col-lg-7 px-4 pt-2">
        <h2 className="border-bottom pb-1">Account info</h2>
        <form className="m-auto">
          <div className="d-md-flex ">
            <div className="col-12 col-md-6 mb-3 pe-md-4">
              <label htmlFor="name" className="fs-5">
                Name*
              </label>
              <input
                type="text"
                name="name"
                className="form-control border-0 border-bottom rounded-0 py-1 px-0 shadow-none"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
            </div>
            <div className="col-12 col-md-6 mb-3 ">
              <label htmlFor="email" className="fs-5">
                Email*
              </label>
              <input
                type="text"
                name="email"
                className="form-control border-0 border-bottom rounded-0 py-1 px-0 shadow-none"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="d-md-flex ">
            <div className="col-12 col-md-6 mb-3 pe-md-4">
              <label htmlFor="tel" className="fs-5">
                Tel*
              </label>
              <input
                type="text"
                name="tel"
                className="form-control border-0 border-bottom rounded-0 py-1 px-0 shadow-none"
                value={formData.tel}
                onChange={handleChange}
                placeholder="xxx xxx xxx"
              />
            </div>
            <div className="col-12 col-md-6 mb-3 ">
              <label htmlFor="dob" className="fs-5">
                Day of Birth*
              </label>
              <input
                type="date"
                name="dob"
                className="form-control border-0 border-bottom rounded-0 py-1 px-0 shadow-none"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
      </div>

      <div data-aos="zoom-in" className="container col-md-10 col-lg-7 mb-4  p-4">
        <h2 className="border-bottom pb-1">Location</h2>
        <form className="m-auto mt-3">
          <div className="d-flex align-items-center justify-content-between my-3">
            <label
              htmlFor="addressLine1"
              className="fs-5 col-3 col-md-3 col-lg-2"
            >
              Address Line 1:{" "}
            </label>
            <input
              type="text"
              name="addressLine1"
              className="form-control rounded-2 px-2 shadow-none bg-secondary-subtle"
              value={formData.addressLine1}
              onChange={handleChange}
              placeholder="Street address, District..."
            />
          </div>
          <div className="d-flex align-items-center justify-content-between mt-3 border-bottom pb-3">
            <label
              htmlFor="addressLine2"
              className="fs-5 col-3 col-md-3 col-lg-2"
            >
              Address Line 2:{" "}
            </label>
            <input
              type="text"
              name="addressLine2"
              className="form-control rounded-2 px-2 shadow-none bg-secondary-subtle"
              value={formData.addressLine2}
              onChange={handleChange}
              placeholder="Apartment, Suite, etc"
            />
          </div>
          <div className="d-flex mt-2">
            <div className="col-4">
              <label htmlFor="city" className="fs-5 mb-1">
                City *
              </label>
              <select
                name="city"
                id="city"
                className="form-select bg-secondary-subtle shadow-none border-0"
                value={formData.city}
                onChange={() => handleChange}
              >
                <option value="">Select a city</option>
                <option value="phnom-penh">Phnom Penh</option>
              </select>
            </div>
            <div className="col-4 px-2">
              <label htmlFor="province" className="fs-5 mb-1">
                District *
              </label>
              <select
                name="district"
                id="district"
                className="form-select bg-secondary-subtle shadow-none border-0"
                value={formData.district}
                onChange={() => handleChange}
              >
                <option value="">Select a district</option>
                <option value="Chamkarmon">Chamkarmon</option>
                <option value="Daun Penh">Daun Penh</option>
                <option value="Meanchey">Meanchey</option>
                <option value="Russey Keo">Russey Keo</option>
                <option value="Sen Sok">Sen Sok</option>
                <option value="Toul Kork">Toul Kork</option>
                <option value="Pou Senchey">Pou Senchey</option>
                <option value="Kambol">Kambol</option>
                <option value="Bac Phnom">Bac Phnom</option>
              </select>
            </div>
            <div className="col-4">
              <label htmlFor="zip" className="fs-5 mb-1">
                Zip *
              </label>
              <input
                type="text"
                name="zip"
                className="form-control border-0 rounded-2 px-2 shadow-none bg-secondary-subtle"
                value={formData.zip}
                onChange={handleChange}
                placeholder="Zip code"
              />
            </div>
          </div>
        </form>
        <div className="d-flex justify-content-end mt-3">
          <button className="px-5 btn btn-success col-12 col-lg-2">Save</button>
        </div>
        <button
          className="btn border-0 border-top text-center text-light w-100 fs-6 bg-secondary-subtle text-dark mt-3 d-lg-none"
          onClick={() => handleLogout()} // Log out the user
        >
          <MdLogout className="me-2 fs-5" />
          Log Out
        </button>
      </div>
    </>
  );
}

export default Account;
