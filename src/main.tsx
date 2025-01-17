import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "sass";

// import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.tsx";
import Account from "./page/Account.tsx";
import AllMenu from "./page/AllMenu.tsx";
import Cart from "./page/Cart.tsx";
import CheckOut from "./page/CheckOut.tsx";
import Contact from "./page/Contact.tsx";
import Home from "./page/Home.tsx";
import MobileSignin from "./page/MobileSignin.tsx";
import NotFound from "./page/NotFound.tsx";
import SignIn from "./page/SignIn.tsx";
import SignUp from "./page/SignUp.tsx";
// import { AuthProvider } from "./store/AuthContext.tsx"; // Import the AuthProvider
import { FoodProvider } from "./store/FoodContext.tsx"; // Import the FoodProvider
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ReactAuthProvider } from "./store/ReactAuthContext.tsx";
import Confirmed from "./page/Confirmed.tsx";

// const domain = "kakveyaiythi.jp.auth0.com";  
// const clientId = "naMzK8hnGplh0xIYagLwCYpLRVkXdsaf"; 
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  //   <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{ redirect_uri: window.location.origin }}>
  //     <AuthProvider>
  //       {" "}
  //       {/* Wrap the entire app with AuthProvider */}
  //       <FoodProvider>
  //         {" "}
  //         {/* Wrap with FoodProvider */}
  //         <BrowserRouter>
  //           <Routes>
  //             <Route path="/" element={<App />}>
  //               <Route index element={<Home />} />
  //               <Route path="/allmenu" element={<AllMenu />} />
  //               <Route path="/contact" element={<Contact />} />
  //               <Route path="/cart" element={<Cart />} />
  //               <Route path="/page-account" element={<MobileSignin />} />
  //               <Route path="/my-account" element={<Account />} />
  //               <Route path="/checkout" element={<CheckOut />} />
  //             </Route>
  //             <Route path="/*" element={<NotFound />} />
  //             <Route path="/signup" element={<SignUp />} />
  //             <Route path="/signin" element={<SignIn />} />
  //           </Routes>
  //         </BrowserRouter>
  //       </FoodProvider>
  //     </AuthProvider>
  //   </Auth0Provider>
  // </StrictMode>
  <StrictMode>
     <GoogleOAuthProvider clientId='664640846302-4pkbqu1r2spej59eck6smil2oo94033n.apps.googleusercontent.com'>
      <ReactAuthProvider>
        <FoodProvider>
        {" "}
        {/* Wrap with FoodProvider */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="/allmenu" element={<AllMenu />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/page-account" element={<MobileSignin />} />
              <Route path="/my-account" element={<Account />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="/confirmed" element={<Confirmed />} />
            </Route>
            <Route path="/*" element={<NotFound />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
        </FoodProvider>
      </ReactAuthProvider>
     </GoogleOAuthProvider>
  </StrictMode>
);
