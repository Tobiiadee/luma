/** @format */

import React, { useState } from "react";
import { Star } from "lucide-react"; // Using lucide-react for the star icon

interface StarRatingProps {
  totalStars?: number; // Optional, defaults to 5 stars
  rating: number; // The fractional rating to display (e.g., 4.5)
  onRatingSelect?: (rating: number) => void; // Optional callback when a rating is selected
  size?: number;
}

const StarRating: React.FC<StarRatingProps> = ({
  totalStars = 5,
  rating,
  onRatingSelect,
  size = 20,
}) => {
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  // Handle rating click (in full increments)
  const handleClick = (index: number) => {
    if (onRatingSelect) {
      onRatingSelect(index);
    }
  };

  // Render the stars, filled proportionally based on the fractional rating
  const renderStar = (starIndex: number) => {
    const currentRating = hoverRating !== null ? hoverRating : rating;
    const fillPercentage = Math.min(
      1,
      Math.max(0, currentRating - starIndex + 1)
    ); // Calculate the fill percentage for each star (0 to 1)

    return (
      <div
        key={starIndex}
        className='relative w-5 h-5 cursor-pointer'
        onClick={() => handleClick(starIndex)}
        onMouseEnter={() => setHoverRating(starIndex)}
        onMouseLeave={() => setHoverRating(null)}>
        <Star size={size} strokeWidth={1} className=' text-gray-300 absolute' />{" "}
        {/* Background star */}
        <Star
          size={size}
          strokeWidth={1}
          className=' text-yellow-400 absolute'
          style={{ clipPath: `inset(0 ${100 - fillPercentage * 100}% 0 0)` }} // Clip the star to fill proportionally
          fill='currentColor'
        />
      </div>
    );
  };

  return (
    <div className='flex space-x-0'>
      {[...Array(totalStars)].map((_, index) => {
        const starIndex = index + 1;
        return renderStar(starIndex);
      })}
    </div>
  );
};

export default StarRating;
