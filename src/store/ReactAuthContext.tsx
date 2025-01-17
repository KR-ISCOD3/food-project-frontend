import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import axios from "axios";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

// Define the type for the user (adjust based on your user object structure)
interface User {
  id: string;
  name: string;
  email: string;
  picture?: string; // Optional property
}

// Define the context type
interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  fetchSession: () => Promise<void>;
  logout: () => Promise<void>;
}

// Create the AuthContext
const ReactAuthContext = createContext<AuthContextType | undefined>(undefined);

// Define the provider props
interface AuthProviderProps {
  children: ReactNode;
}

// Create the provider component
export const ReactAuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(() => {
    // Load user from localStorage when the component initializes
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Function to fetch session data
  const fetchSession = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/auth/profile");
      setUser(response.data.user);
      // Save the user to localStorage
      console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    } catch (error) {
      console.error("Failed to fetch session:", error);
      setUser(null);
      // Remove the user from localStorage if the session is invalid
      localStorage.removeItem("user");
    }
  };

  // Function to log out the user
  const logout = async () => {
    try {
      // await axios.post("http://localhost:3000/api/auth/logout", { withCredentials: true });
      googleLogout();
      setUser(null);
      navigate("/");
      // Remove the user from localStorage on logout
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  // Save the user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // Automatically fetch session data on mount
  // useEffect(() => {
  //   fetchSession();
  // }, []);

  return (
    <ReactAuthContext.Provider value={{ user, setUser, fetchSession, logout }}>
      {children}
    </ReactAuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(ReactAuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
