import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import HomePage from "./pages/hompage/HomePage";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import ProductPage from "./pages/product/ProductPage";
import AboutPage from "./pages/about/AboutPage";
import FaqPage from "./pages/faq/FaqPage";
import ProfilePage from "./pages/profile/ProfilePage";
import PageNotAvailable from "./pages/404/PageNotAvailable";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* main routes */}
        <Route exact path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/*" element={<PageNotAvailable />} />
        {/* auth routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
