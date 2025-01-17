import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FoodContext } from "../store/FoodContext"; // Import FoodContext
// import { Food } from "../types/Food.ts";

interface Food {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  khmerName: string; 
};


function BreakFastFood() {
  const { foods, cart, loading, error, addToCart } = useContext(FoodContext); // Access cart data from context
  const [showPopup, setShowPopup] = useState(false); // State for popup visibility
  const [message, setMessage] = useState(""); // State for message
  const navigate = useNavigate(); // Navigate hook

  // Show popup temporarily after adding to cart
  const handleAddToCart = (food: Food) => {
    // Check if the product is already in the cart
    const isAlreadyInCart = cart.some((item: Food) => item.id === food.id);

    if (!isAlreadyInCart) {
      addToCart(food); // Add item to cart
      setMessage("✅ Added to Cart!");
      setShowPopup(true); // Show popup
      setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
    } else {
      setMessage("❗ Item already in the cart");
      setShowPopup(true); // Show popup with message for already added item
      setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
    }
  };

  // Navigate to cart on "Checkout" click
  const handleCheckout = () => {
    navigate("/cart"); // Redirect to cart page
  };

  if (error) {
    return <div className="text-danger text-center py-4">{error}</div>;
  }

  if (loading) {
    const skeletonCards = Array.from({ length: 4 }).map((_, index) => (
      <div key={index} className="col-9 col-md-5 col-lg-3 px-lg-4 mx-2 mx-md-3 mx-lg-0">
        <div className="card overflow-hidden">
          <div style={{ height: 220 }} className="p-3 bg-secondary skeleton"></div>
          <div className="card-body px-3 py-2">
            <div className="skeleton-text mb-1" style={{ width: "50%", height: "1rem" }}></div>
            <div className="skeleton-text" style={{ width: "70%", height: "1rem" }}></div>
          </div>
        </div>
      </div>
    ));

    return (
      <div className="container-fluid px-1 border-top border-2">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="m-0">All-Day Breakfast</h2>
          <NavLink to="/allmenu" className="nav-link">
            <p className="text-success fs-5 m-0">View All</p>
          </NavLink>
        </div>
        <div className="d-flex justify-content-start overflow-x-scroll m-0 my-4">
          {skeletonCards}
        </div>
      </div>
    );
  }

  const breakfastFoods = foods
    .filter((food: Food) => food.category === "breakfast")
    .slice(0, 4);

  return (
    <div className="container-fluid px-1 border-top border-2">
      {/* Popup Message */}
      {showPopup && (
        <div
          className="position-fixed top-50 start-50 translate-middle bg-alert shadow rounded py-3 text-center px-5"
          style={{ zIndex: 1050 }}
        >
          <h5 className="text-light mb-3">{message}</h5>
          {message === "✅ Added to Cart!" && (
            <button className="btn btn-outline-light" onClick={handleCheckout}>
              Checkout
            </button>
          )}
        </div>
      )}

      <div data-aos="zoom-in" className="d-flex justify-content-between align-items-center">
        <h2 className="m-0">All-Day Breakfast</h2>
        <NavLink to="/allmenu" className="nav-link">
          <p className="text-success fs-5 m-0">View All</p>
        </NavLink>
      </div>

      <div className="d-flex justify-content-start overflow-x-scroll m-0 py-4">
        {breakfastFoods.map((food: Food) => (
          <div data-aos="zoom-in" key={food.id} className="col-9 col-md-5 col-lg-3 px-lg-4 mx-2 mx-md-3 mx-lg-0">
            <div className="card overflow-hidden">
              <div style={{ height: 220 }} className="p-3 border-success">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-100 h-100 object-fit-cover rounded-2"
                />
              </div>
              <div className="card-body px-3 py-2">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="fs-5 m-0 text-danger">
                      ${food.price.toFixed(2)}
                    </p>
                    <p className="m-0 text-secondary">{food.category}</p>
                    <h6
                      className="text-1line"
                      style={{ lineHeight: 2 }}
                    >
                      {food.name}
                    </h6>
                  </div>
                  <button
                    className="btn bg-success text-light px-3 mt-4"
                    onClick={() => handleAddToCart(food)} // Add to cart and show popup if not already in cart
                  >
                    Add
                    <MdOutlineAddShoppingCart className="ms-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BreakFastFood;
