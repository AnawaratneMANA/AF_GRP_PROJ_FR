import React, {useState} from 'react';
import {FaStar} from "react-icons/fa";
import './Star.css';

const Star = ({value, method}) => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return(
      <div>
          {[...Array(value)].map((star, i) => {
              const ratingValue = i + 1;
              return(
                  <label>
                      <input
                          type="radio"
                          name="rating"
                          value={ratingValue}
                          onClick={() => setRating(ratingValue)}
                      />
                      <FaStar
                          className="star"
                          color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                          size={40}
                          onMouseOver={() => setHover(ratingValue)}
                          onMouseLeave={() => setHover(method)}
                      />
                  </label>
              );
          })}
      </div>
    );
};

export default Star;
