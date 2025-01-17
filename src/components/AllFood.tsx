import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useState, useEffect } from "react";
import { Food } from "../types/Food"; // Assuming you have a Food type defined
import { useNavigate, useLocation } from "react-router-dom";

interface AllFoodProps {
  foods: Food[];
  loading: boolean;
  error: string | null;
  addToCart: (food: Food) => void;
  cart: Food[];
}

const AllFood: React.FC<AllFoodProps> = ({ foods, loading, error, addToCart, cart }) => {
  const [showPopup, setShowPopup] = useState<boolean>(false); // State for popup visibility
  const [message, setMessage] = useState(""); // State for message
  const [searchQuery, setSearchQuery] = useState<string>(""); // State for search query
  const [filteredFoods, setFilteredFoods] = useState<Food[]>([]); // State for filtered foods

  const navigate = useNavigate();
  const location = useLocation(); // Get current URL

  useEffect(() => {
    // Get the search query from the URL when the component mounts or when the location changes
    const queryParams = new URLSearchParams(location.search);
    const search = queryParams.get("search");
    if (search) {
      setSearchQuery(decodeURIComponent(search)); // Decode the query parameter and set it
    } else {
      setSearchQuery(""); // Reset searchQuery if not present in the URL
    }
  }, [location.search]); // Effect runs when URL changes

  useEffect(() => {
    // Filter foods based on the search query
    if (searchQuery) {
      setFilteredFoods(
        foods.filter((food) =>
          food.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredFoods(foods); // Show all foods if no search query
    }
  }, [searchQuery, foods]);

  if (error) return <div className="text-danger text-center">{error}</div>;

  if (loading) {
    const skeletonCards = Array(4)
      .fill(0)
      .map((_, index) => (
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
        <div className="row justify-content-center m-0 my-4">{skeletonCards}</div>
      </div>
    );
  }

  const handleAddToCart = (food: Food) => {
    const isAlreadyInCart = cart.some((item: Food) => item.id === food.id);

    if (!isAlreadyInCart) {
      addToCart(food); // Add item to cart
      setMessage("✅ Added to Cart!");
    } else {
      setMessage("❗ Item already in the cart");
    }
    setShowPopup(true); // Show popup
    setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
  };

  const handleCheckout = () => {
    navigate("/cart");
  };

  return (
    <div className="container p-0">
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

      <div className="px-2">
        <div className="row justify-content-center m-0 my-4">
          {filteredFoods.map((food: Food) => (
            <div key={food.id} className="col-12 col-md-5 col-lg-3 px-lg-4 mx-2 mx-md-3 mx-lg-0 my-2">
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
                      <p className="fs-5 m-0 text-danger">${food.price.toFixed(2)}</p>
                      <p className="m-0 text-secondary">{food.category}</p>
                      <h6 className="text-1line" style={{ lineHeight: 2 }}>
                        {food.name}
                      </h6>
                    </div>
                    <button
                      className="btn bg-success text-light px-3 mt-3"
                      onClick={() => handleAddToCart(food)}
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
    </div>
  );
};

export default AllFood;
