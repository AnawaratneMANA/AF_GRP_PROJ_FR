import React, {useState} from 'react';
import './Rating.css';
import Star from "./Star/Star";

function Ratings1({rows}){
    return(
      <div className="rating">
          <div className="img_top1">
              <img className='photo1' src={rows.image}></img>
          </div>
          <div className="rating_info">
              <h3>{rows.title}</h3>
              <p>{rows.description}</p>
          </div>
          <div>
              <Star value = {rows.stars}/>
          </div>
      </div>
    );
}

export default Ratings1;
