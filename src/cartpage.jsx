import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./cartcontext";
import CartItem from "./cartItem";

const CartPage = () => {
  const { cart, cartTotal, removeFromCart, updateQuantity } = useCart();

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <Link to="/" className="continue-shopping">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      <div className="cart-items">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
          />
        ))}
      </div>
      <div className="cart-summary">
        <div className="cart-total">
          <span>Total:</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
