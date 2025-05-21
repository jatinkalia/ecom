import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./cartcontext";

const Header = () => {
  const { cartCount } = useCart();

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          ShopEasy
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cart" className="cart-link">
            Cart
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
