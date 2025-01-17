// import React, { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";

// // Define a type for the user
// interface User {
//   id: string;
//   name: string;
//   email: string;
//   avatar: string;
// }

// // Define the context type
// interface AuthContextType {
//   user: User | null;
//   login: () => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     const getUser = async () => {
//       try {
//         const response = await axios.get("https://outh2serverproject.onrender.com/auth/login/success", {
//           withCredentials: true, // Include credentials for cookies
//         });
//         // const response = await axios.get("http://localhost:4000/auth/login/success", {
//         //   withCredentials: true, // Include credentials for cookies
//         // });
//         if (response.data && response.data.success) {
//           setUser(response.data.user); // Set user data to state
//         } else {
//           console.error("Failed to fetch user:", response.data.message);
//         }
//       } catch (err) {
//         console.error("Error fetching user:", err);
//       }
//     };
  
//     getUser();
//   }, []);
  

//   const login = () => {
//     window.open("https://outh2serverproject.onrender.com/auth/google", "_self"); // Redirect to Google login
//     // window.open("http://localhost:4000/auth/google", "_self"); // Redirect to Google login
//   };

//   const logout = async () => {
//     try {
//       // await axios.get("http://localhost:4000/auth/logout", { withCredentials: true });
//       window.open("https://outh2serverproject.onrender.com/auth/logout", "_self");
//       // window.open("http://localhost:4000/auth/logout", "_self");
//       setUser(null);
//     } catch (err) {
//       console.error("Logout failed:", err);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = (): AuthContextType => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };
