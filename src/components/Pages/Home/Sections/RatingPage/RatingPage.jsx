import React from 'react';
import Ratings1 from "../../../../Ratings/Ratings1";
import './ratingstyles.css'
function RatingPage() {
    return (<React.Fragment>
        <div className="rating-section" data-testid='rating-section'>
        <div className="rating-header" data-testid='rating-header'>
            <h2 className="rating-header-main-header" data-testid='rating-header-main-header'>Register</h2>
            <h4 className="rating-header-second-header" data-testid='rating-header-second-header'>Information</h4>
        </div>
        <div className="cardLayout" data-testid='rating-cardLayout'>
            <Ratings1/>
            <div className="line" data-testid='rating-line1'></div>
            <Ratings1/>
            <div className="line" data-testid='rating-line2'></div>
            <Ratings1/>
        </div>
        </div>


    </React.Fragment>)
}

export default RatingPage;