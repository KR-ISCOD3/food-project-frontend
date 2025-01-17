import { IoIosCamera } from "react-icons/io";
import { useAuth } from "../store/ReactAuthContext";
import { useState } from "react";

function Account() {
  const { user } = useAuth();
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    tel: '',
    dob: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    province: '',
    zip: ''
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div
        className="container d-grid justify-content-center"
        style={{ paddingTop: 120 }}
      >
        <div className="text-center mb-3">
          <div
            style={{
              width: 80,
              height: 80,
            }}
            className="bg-success mx-auto rounded-circle overflow-hidden border border-2"
          >
            <img src={user?.avatar} alt="User Avatar" className="w-100 h-100 object-fit-cover" />
          </div>
          <button className="btn btn-success px-4 py-1 mt-2 rounded-5 d-flex align-items-center">
            <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
              Upload <IoIosCamera className="fs-5 mb-1" />
            </label>
            <input
              id="fileInput"
              type="file"
              className="d-none"
            />
          </button>
        </div>
      </div>
      
      <div className="container col-md-10 col-lg-7 px-4 pt-2">
        <h2 className="border-bottom pb-1">Account info</h2>
        <form className="m-auto">
          <div className="d-md-flex ">
            <div className="col-12 col-md-6 mb-3 pe-md-4">
              <label htmlFor="name" className="fs-5">Name*</label>
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
              <label htmlFor="email" className="fs-5">Email*</label>
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
              <label htmlFor="tel" className="fs-5">Tel*</label>
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
              <label htmlFor="dob" className="fs-5">Day of Birth*</label>
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

      <div className="container col-md-10 col-lg-7 mb-4  p-4">
        <h2 className="border-bottom pb-1">Location</h2>
        <form className="m-auto mt-3">
          <div className="d-flex align-items-center justify-content-between my-3">
            <label htmlFor="addressLine1" className="fs-5 col-3 col-md-3 col-lg-2">Address Line 1: </label>
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
            <label htmlFor="addressLine2" className="fs-5 col-3 col-md-3 col-lg-2">Address Line 2: </label>
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
              <label htmlFor="city" className="fs-5 mb-1">City *</label>
              <select
                name="city"
                id="city"
                className="form-select bg-secondary-subtle shadow-none border-0"
                value={formData.city}
                onChange={()=>handleChange}
              >
                <option value="">Select a city</option>
                <option value="phnom-penh">Phnom Penh</option>
                <option value="battambang">Battambang</option>
                <option value="siem-reap">Siem Reap</option>
                <option value="sihanoukville">Sihanoukville</option>
                <option value="kampong-cham">Kampong Cham</option>
                <option value="kampong-chhnang">Kampong Chhnang</option>
                <option value="kampong-speu">Kampong Speu</option>
                <option value="kampot">Kampot</option>
                <option value="kandal">Kandal</option>
                <option value="kep">Kep</option>
                <option value="kratie">Kratie</option>
                <option value="mondulkiri">Mondulkiri</option>
                <option value="preah-vihear">Preah Vihear</option>
                <option value="prey-veng">Prey Veng</option>
                <option value="pursat">Pursat</option>
                <option value="ratanakiri">Ratanakiri</option>
                <option value="stung-treng">Stung Treng</option>
                <option value="svay-rieng">Svay Rieng</option>
                <option value="takeo">Takeo</option>
                <option value="tbong-khmum">Tbong Khmum</option>
              </select>
            </div>
            <div className="col-4 px-2">
              <label htmlFor="province" className="fs-5 mb-1">Province *</label>
              <select
                name="province"
                id="province"
                className="form-select bg-secondary-subtle shadow-none border-0"
                value={formData.province}
                onChange={()=>handleChange}
              >
                <option value="">Select a province</option>
                <option value="phnom-penh">Phnom Penh</option>
                <option value="banteay-meanchey">Banteay Meanchey</option>
                <option value="battambang">Battambang</option>
                <option value="kampong-cham">Kampong Cham</option>
                <option value="kampong-chhnang">Kampong Chhnang</option>
                <option value="kampong-speu">Kampong Speu</option>
                <option value="kampong-thom">Kampong Thom</option>
                <option value="kampot">Kampot</option>
                <option value="kandal">Kandal</option>
                <option value="koh-kong">Koh Kong</option>
                <option value="kratie">Kratie</option>
                <option value="mondulkiri">Mondulkiri</option>
                <option value="oddar-meanchey">Oddar Meanchey</option>
                <option value="pailin">Pailin</option>
                <option value="preah-vihear">Preah Vihear</option>
                <option value="preah-sihanouk">Preah Sihanouk</option>
                <option value="prey-veng">Prey Veng</option>
                <option value="pursat">Pursat</option>
                <option value="ratanakiri">Ratanakiri</option>
                <option value="siem-reap">Siem Reap</option>
                <option value="stung-treng">Stung Treng</option>
                <option value="svay-rieng">Svay Rieng</option>
                <option value="takeo">Takeo</option>
                <option value="tbong-khmum">Tbong Khmum</option>
              </select>
            </div>
            <div className="col-4">
              <label htmlFor="zip" className="fs-5 mb-1">Zip *</label>
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
          <button className="px-5 btn btn-success">Save</button>
        </div>
      </div>
    </>
  );
}

export default Account;
