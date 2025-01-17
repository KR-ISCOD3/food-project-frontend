import { FoodContext } from "../store/FoodContext";
import { FormEvent, useContext,useEffect,useState } from "react";
import { useAuth } from "../store/ReactAuthContext";
import { useNavigate } from "react-router-dom";

function CheckOut() {
  const foodContext = useContext(FoodContext);
  const {user} = useAuth();
  const navigate = useNavigate();
  
  const {cart,totalPrice} = foodContext;
   const [paymentOption, setPaymentOption] = useState("cashOut");

  const handlePaymentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentOption(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Payment method: ${paymentOption}`);
  };

  // const messageConfirm = () => {

  // }
  useEffect(()=>{
    if(!user){
      navigate('/signin')
    }
  },[navigate, user])

  return (
    <div className="container mb-5" style={{ paddingTop: "120px" }}>
      <div className="row m-0 ">
        <div className="col-12 col-md-8">
          <form onSubmit={handleSubmit} className="m-auto">
            <div className="border p-md-4 rounded-4">
              <h2 className="border-bottom pb-1">Contact</h2>
              <div className="d-flex align-items-center justify-content-between my-3">
                <div className="col-6 pe-3">
                  <label htmlFor="address1" className="fs-5">
                    Name:
                  </label>
                  <input
                    id="address1"
                    type="text"
                    className="form-control rounded-2 px-2 shadow-none bg-secondary-subtle border-0"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="address2" className="fs-5">
                    Tel:
                  </label>
                  <input
                    id="address2"
                    type="text"
                    className="form-control rounded-2 px-2 shadow-none bg-secondary-subtle border-0"
                    placeholder="+855 -- --- ---"
                  />
                </div>
              </div>
              <h2 className="border-bottom pb-1">Location</h2>
              <div className="d-flex align-items-center justify-content-between my-3">
                <div className="col-6 pe-3">
                  <label htmlFor="address1" className="fs-5">
                    Address Line 1:
                  </label>
                  <input
                    id="address1"
                    type="text"
                    className="form-control rounded-2 px-2 shadow-none bg-secondary-subtle border-0"
                    placeholder="Street address, District..."
                    required
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="address2" className="fs-5">
                    Address Line 2:
                  </label>
                  <input
                    id="address2"
                    type="text"
                    className="form-control rounded-2 px-2 shadow-none bg-secondary-subtle border-0"
                    placeholder="Apartment, Suite, etc."
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
                    className="form-select bg-secondary-subtle shadow-none border-0"
                    required
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
                  <label htmlFor="province" className="fs-5 mb-1">
                    Province *
                  </label>
                  <select
                    id="province"
                    className="form-select bg-secondary-subtle shadow-none border-0"
                    required
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
                  <label htmlFor="zip" className="fs-5 mb-1">
                    Zip *
                  </label>
                  <input
                    id="zip"
                    type="text"
                    className="form-control border-0 rounded-2 px-2 shadow-none bg-secondary-subtle"
                    placeholder="Zip code"
                    required
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
          </form>
        </div>
        <div className="col-12 col-md-4 ">
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
                        <img src={item.image} className="w-100 h-100 object-fit-cover" />
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
                        <p className="fs-6 text-success m-0">${item.subtotal.toFixed(2)}</p>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="text-center">
                    No items in the cart.
                  </td>
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
      </div>
    </div>
  );
}

export default CheckOut;
