import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./cartcontext";
import Header from "./header";
import ProductListPage from "./productlist";
import ProductDetailPage from "./productdetails";
import CartPage from "./cartpage";
import "./styles.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<ProductListPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
