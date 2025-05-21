import React from "react";
import { Link } from "react-router-dom";
import Rating from "./rating";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
          <h3>{product.title}</h3>
          <div className="product-price">${product.price.toFixed(2)}</div>
          <Rating rating={product.rating} />
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
