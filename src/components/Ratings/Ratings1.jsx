import React, {useState} from 'react';
import './Rating.css';
import Star from "./Star/Star";

function Ratings1({rows}){
    console.log(rows);
    return(
      <div className="rating">
          <div className="rating_info">
              <h3>{rows.name}</h3>
              <p>{rows.feedback}</p>
          </div>
          <div>
              <Star value={5} method={rows.rating}/>
          </div>
      </div>
    );
}

export default Ratings1;
