import React, { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, SetHover] = useState(0);

  const handleStarClick = (number) => {
    setRating(number);
    // console.log(rating);
  };

  const handleMouseOver = (number) => {
    SetHover(number);
    // console.log(hover);
  };

  const handleMouseLeave = (rating) => {
    SetHover(rating);
  };

//   console.log(`rating: ${rating}`);
//   console.log(`hover: ${hover}`);
//   console.log(` ((rating && hover) || hover): ${(rating && hover) || hover}`);

  return (
    <>
      {/* <h2>StarRating</h2> */}
      <div>
        {[1, 2, 3, 4, 5].map((number, index) => {
          return (
            <button
              key={index}
              onClick={() => handleStarClick(number)}
              onMouseOver={() => handleMouseOver(number)}
              onMouseLeave={() => handleMouseLeave(rating)}
              className="star-wrapper"
            >
              <span
                className={`star ${
                  number <= ((rating && hover) || hover) ? "on" : "off"
                }`}
              >
                &#9733;
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default StarRating;
