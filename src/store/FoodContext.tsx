import React, { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";

// Define the structure of a food item
interface Food {
  id: number;
  name: string;
  price: number;
  description?: string;
  image: string;
  category: string;
  khmerName: string; // Added Khmer name field
}

// Define the structure of a cart item
interface CartItem extends Food {
  quantity: number;
  subtotal: number;
}

// Define the context value type
interface FoodContextType {
  foods: Food[];
  loading: boolean;
  error: string | null;
  cart: CartItem[];
  addToCart: (food: Food) => void;
  removeFromCart: (foodId: number) => void;
  getCartTotal: () => number;
  handleSelectAll: (isChecked: boolean) => void;
  handleSelect: (id: number, isChecked: boolean) => void;
  handleQuantityChange: (id: number, newQuantity: number) => void;
  handleDelete: () => void;
  searchByKhmerName: (khmerName: string) => Food[]; // New search function
  selectedIds: number[];
  totalPrice: number;
}

// Create the Context with a default value
export const FoodContext = createContext<FoodContextType>({
  foods: [],
  loading: true,
  error: null,
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  getCartTotal: () => 0,
  handleSelectAll: () => {},
  handleSelect: () => {},
  handleQuantityChange: () => {},
  handleDelete: () => {},
  searchByKhmerName: () => [],
  selectedIds: [],
  totalPrice: 0,
});

interface FoodProviderProps {
  children: ReactNode;
}

export const FoodProvider: React.FC<FoodProviderProps> = ({ children }) => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [cart, setCart] = useState<CartItem[]>(() => {
    // Load cart from localStorage
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get("https://foods-json.onrender.com/foods");
        setFoods(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data.message || "Error fetching foods");
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (food: Food) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === food.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === food.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                subtotal: (item.quantity + 1) * item.price,
              }
            : item
        );
      } else {
        return [...prevCart, { ...food, quantity: 1, subtotal: food.price }];
      }
    });
  };

  const removeFromCart = (foodId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== foodId));
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.subtotal, 0);
  };

  const handleSelectAll = (isChecked: boolean) => {
    setSelectedIds(isChecked ? cart.map((food) => food.id) : []);
  };

  const handleSelect = (id: number, isChecked: boolean) => {
    setSelectedIds((prev) =>
      isChecked ? [...prev, id] : prev.filter((selectedId) => selectedId !== id)
    );
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: newQuantity,
              subtotal: newQuantity * item.price,
            }
          : item
      )
    );
  };

  const handleDelete = () => {
    setCart((prevCart) => prevCart.filter((food) => !selectedIds.includes(food.id)));
    setSelectedIds([]);
  };

  const searchByKhmerName = (khmerName: string) => {
    if (!khmerName.trim()) return foods; // Return all foods if the search query is empty
  
    return foods.filter((food) =>
      food.khmerName && food.khmerName.toLowerCase().includes(khmerName.toLowerCase())
    );
  };

  const totalPrice = cart.reduce((total, item) => total + item.subtotal, 0);

  return (
    <FoodContext.Provider
      value={{
        foods,
        loading,
        error,
        cart,
        addToCart,
        removeFromCart,
        getCartTotal,
        handleSelectAll,
        handleSelect,
        handleQuantityChange,
        handleDelete,
        searchByKhmerName,
        selectedIds,
        totalPrice,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};
