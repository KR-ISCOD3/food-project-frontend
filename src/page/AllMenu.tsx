import { useContext, useEffect, useState } from "react";
import AllFood from "../components/AllFood";
import { useNavigate } from "react-router-dom";
import { Food } from "../types/Food"; // Assuming Food type is defined
import { FoodContext } from "../store/FoodContext";

function AllMenu() {
  const { foods, loading, error, addToCart, cart } = useContext(FoodContext); // Access food data and context values
  const [selectedCategory, setSelectedCategory] = useState<string>("all"); // Default category set to 'all'
  const [filteredFoods, setFilteredFoods] = useState<Food[]>([]); // State to store filtered foods

  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Filter the foods based on the selected category
    const filtered = selectedCategory === "all"
      ? foods // If "all" is selected, show all foods
      : foods.filter((food) => food.category === selectedCategory); // Otherwise, filter by category
    
    setFilteredFoods(filtered); // Update the filteredFoods state
  }, [selectedCategory, foods]); // Re-run effect when selectedCategory or foods change

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value); // Update selected category
    navigate(`?category=${event.target.value}`); // Update the URL with the selected category
  };

  return (
    <div style={{ paddingTop: "130px" }}>
      <div className="container">
        <div className="text-center d-md-flex justify-content-between align-items-center border-bottom">
          <h1>
            Restaurant <span className="text-success">All menu</span>
          </h1>
          <div className="col-5 m-auto m-lg-0 col-md-3 col-lg-2 ">
            <select
              id="foodCategory"
              className="form-select shadow-none border border-1 pe-5 mx-auto mb-3"
              value={selectedCategory}
              onChange={handleCategoryChange} // Handle category change
            >
              <option value="all">All-Food</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>
          </div>
        </div>

        {/* Pass filtered data to AllFood component */}
        <div className="container">
          <AllFood 
            foods={filteredFoods} 
            loading={loading} 
            error={error} 
            addToCart={addToCart} 
            cart={cart}
          />
        </div>
      </div>
    </div>
  );
}

export default AllMenu;
