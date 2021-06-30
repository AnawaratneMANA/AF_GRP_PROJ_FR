import React, {useState} from 'react';
import './Rating.css';
import Star from "./Star/Star";

function Ratings1({rows}){
    return(
      <div className="rating">
          <div className="rating_info">
              <h3>{rows.title}</h3>
              {/*<h3>Rating 1</h3>*/}
              {/*<p>We want to help<br/>*/}
              {/*    sharing Review materials<br/>*/}
              {/*    and documents to the users.</p>*/}
              <p>{rows.description}</p>
              {/*<p>{rows.title}</p>*/}
          </div>
          <div>
              <Star value = {rows.stars}/>
          </div>
      </div>
    );
}

export default Ratings1;
