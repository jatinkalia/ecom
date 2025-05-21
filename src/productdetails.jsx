import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "./cartcontext";
import Rating from "./rating";
import Spinner from "./spinner";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Spinner />;
  if (error) return <div className="error">Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-detail">
      <div className="product-images">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h1>{product.title}</h1>
        <div className="product-meta">
          <div className="product-price">${product.price.toFixed(2)}</div>
          <Rating rating={product.rating} showCount />
        </div>
        <p className="product-description">{product.description}</p>
        <button className="add-to-cart" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
