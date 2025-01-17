import { FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FoodContext } from "../store/FoodContext";
import { useAuth } from "../store/ReactAuthContext";

function CheckOut() {
  const foodContext = useContext(FoodContext);
  const { user } = useAuth();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    tel: "",
    addrline1: "",
    addrline2: "",
    city: "",
    district: "",
    zip: "",
  });

  const { cart, totalPrice } = foodContext;
  const [paymentOption, setPaymentOption] = useState("cashOut");

  const handlePaymentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentOption(e.target.value);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // alert(`Payment method: ${paymentOption}`);
    // console.log("User data submitted:", userData);
    // Clear the cart in localStorage
    localStorage.removeItem("cart");
    foodContext.setCart([]);
    
    navigate("/confirmed");
    // Reset the form fields
    setUserData({
      name: "",
      tel: "",
      addrline1: "",
      addrline2: "",
      city: "",
      district: "",
      zip: "",
    });
  };

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [navigate, user]);

  return (
    <div className="container mb-5" style={{ paddingTop: "120px" }}>
      <div className="row m-0">
        <form onSubmit={handleSubmit} className="m-auto row">
          <div className="col-12 col-md-8">
            <div className="border p-md-4 rounded-4">
              <h2 className="border-bottom pb-1">Contact</h2>
              <div className="d-flex align-items-center justify-content-between my-3">
                <div className="col-6 pe-3">
                  <label htmlFor="name" className="fs-5">
                    Name:
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="form-control rounded-2 px-2 shadow-none bg-secondary-subtle border-0"
                    placeholder="Your Name"
                    value={userData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="tel" className="fs-5">
                    Tel:
                  </label>
                  <input
                    id="tel"
                    type="text"
                    name="tel"
                    className="form-control rounded-2 px-2 shadow-none bg-secondary-subtle border-0"
                    placeholder="+855 -- --- ---"
                    value={userData.tel}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <h2 className="border-bottom pb-1">Location</h2>
              <div className="d-flex align-items-center justify-content-between my-3">
                <div className="col-6 pe-3">
                  <label htmlFor="addrline1" className="fs-5">
                    Address Line 1:
                  </label>
                  <input
                    id="addrline1"
                    type="text"
                    name="addrline1"
                    className="form-control rounded-2 px-2 shadow-none bg-secondary-subtle border-0"
                    placeholder="Street address, District..."
                    value={userData.addrline1}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="addrline2" className="fs-5">
                    Address Line 2:
                  </label>
                  <input
                    id="addrline2"
                    type="text"
                    name="addrline2"
                    className="form-control rounded-2 px-2 shadow-none bg-secondary-subtle border-0"
                    placeholder="Apartment, Suite, etc."
                    value={userData.addrline2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="d-flex mt-2">
                <div className="col-4">
                  <label htmlFor="city" className="fs-5 mb-1">
                    City *
                  </label>
                  <select
                    id="city"
                    name="city"
                    className="form-select bg-secondary-subtle shadow-none border-0"
                    required
                    value={userData.city}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a city</option>
                    <option value="phnome penh">Phnom Penh</option>
                    {/* Add your city options here */}
                  </select>
                </div>
                <div className="col-4 px-2">
                  <label htmlFor="province" className="fs-5 mb-1">
                    District *
                  </label>
                  <select
                    id="district"
                    name="district"
                    className="form-select bg-secondary-subtle shadow-none border-0"
                    required
                    value={userData.district}
                    onChange={handleInputChange}
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
                    id="zip"
                    type="text"
                    name="zip"
                    className="form-control border-0 rounded-2 px-2 shadow-none bg-secondary-subtle"
                    placeholder="Zip code"
                    required
                    value={userData.zip}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="border p-md-4 rounded-4 mt-3">
              <h2 className="border-bottom pt-3 pb-1">Payment</h2>
              <div className="mb-3">
                <label className="form-label fs-5">Select Payment Method</label>
                <select
                  className="form-select bg-secondary-subtle shadow-none border-0"
                  value={paymentOption}
                  onChange={handlePaymentChange}
                  required
                >
                  <option value="cashOut">Cash Out</option>
                  <option value="visaAba">Visa Card (ABA)</option>
                  <option value="visaAcleda">Visa Card (ACLEDA)</option>
                </select>
              </div>

              {paymentOption === "cashOut" && (
                <div className="alert alert-success">
                  <strong>Cash Out:</strong> You will pay in cash upon receiving
                  the product.
                </div>
              )}

              {(paymentOption === "visaAba" ||
                paymentOption === "visaAcleda") && (
                <div>
                  <div className="mb-3">
                    <label htmlFor="cardNumber" className="form-label">
                      Card Number
                    </label>
                    <div className="d-flex">
                      <input
                        id="cardNumber"
                        type="text"
                        className="form-control rounded-2 px-2 shadow-none bg-secondary-subtle border-0"
                        placeholder="XXXX - XXXX - XXXX - XXXX"
                        required
                      />
                      <img src="image/visaCard.jpg" alt="" width={40} />
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-6 pe-2">
                      <label htmlFor="expiry" className="form-label">
                        Expiration Date
                      </label>
                      <input
                        id="expiry"
                        type="text"
                        className="form-control rounded-2 px-2 shadow-none bg-secondary-subtle border-0"
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div className="col-6">
                      <label htmlFor="cvv" className="form-label">
                        CVV
                      </label>
                      <input
                        id="cvv"
                        type="password"
                        className="form-control rounded-2 px-2 shadow-none bg-secondary-subtle border-0"
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="border p-md-4 rounded-3">
              <h4 className="text-center">Order Summary</h4>
              <table className="table align-middle border-bottom">
                {cart.length > 0 ? (
                  cart.map((item, index) => (
                    <tr className="align-middle" key={index}>
                      <td className="d-flex align-items-center">
                        <div
                          style={{ width: "50px", height: "50px" }}
                          className="rounded-circle overflow-hidden p-0 bg-body-secondary"
                        >
                          <img
                            src={item.image}
                            className="w-100 h-100 object-fit-cover"
                          />
                        </div>
                        <div className="ms-2" style={{ fontSize: 14 }}>
                          <p className="m-0">{item.name}</p>
                          <p className="m-0 text-secondary">{item.category}</p>
                          <p className="m-0 text-secondary">${item.price}</p>
                        </div>
                      </td>
                      <td className="align-middle text-end">
                        <div>
                          <p className="text-secondary m-0">x{item.quantity}</p>
                          <p className="fs-6 text-success m-0">
                            ${item.subtotal.toFixed(2)}
                          </p>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="text-center">No items in the cart.</td>
                  </tr>
                )}
              </table>
              <div>
                <div className="d-flex justify-content-between">
                  <p className="text-secondary m-0">Delivery Price:</p>
                  <p className="m-0">$0.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="m-0 fw-bold">Total to Pay:</p>
                  <p className="m-0 fw-bold">${totalPrice.toFixed(2)}</p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button className="btn btn-success mt-3">Confirm Order</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckOut;
