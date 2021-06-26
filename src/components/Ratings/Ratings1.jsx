import React, {useState} from 'react';
import './Rating.css';
import Star from "./Star/Star";

function Ratings1(){
    return(
      <div className="rating">
          <div className="rating_info">
              <h3>Menaka</h3>
              <p>We want to help<br/>
                  sharing Review materials<br/>
                  and documents to the users.</p>
          </div>
          <div>
              <Star/>
          </div>
      </div>
    );
}

export default Ratings1;
