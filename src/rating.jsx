import React from "react";

const Rating = ({ rating, showCount = false }) => {
  const fullStars = Math.floor(rating.rate);
  const hasHalfStar = rating.rate % 1 >= 0.5;

  return (
    <div className="product-rating">
      <div className="stars">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return (
              <span key={i} className="star full">
                ★
              </span>
            );
          }
          if (i === fullStars && hasHalfStar) {
            return (
              <span key={i} className="star half">
                ★
              </span>
            );
          }
          return (
            <span key={i} className="star empty">
              ★
            </span>
          );
        })}
      </div>
      {showCount && (
        <span className="rating-count">({rating.count} reviews)</span>
      )}
    </div>
  );
};

export default Rating;
