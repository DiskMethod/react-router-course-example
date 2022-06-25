import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./components/ProductDetail";
import WelcomeUser from "./pages/WelcomeUser";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Welcome />} />
          <Route path="welcome" element={<Welcome />}>
            <Route path=":user" element={<WelcomeUser />} />
          </Route>
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<ProductDetail />} />
          <Route path="*" element={<p>Nothing to see here!</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
