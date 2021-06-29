import React from 'react';
import Ratings1 from "../../../../Ratings/Ratings1";
import './ratingstyles.css'
function RatingPage() {
    return (<React.Fragment>
        <div className="rating-section">
        <div className="rating-header">
            <button className="buttonDownload" onClick ={(e) => {
                e.preventDefault();
                window.location.href='/allFeedbackPage';
            }}>View All</button>
            <h2 className="rating-header-main-header">Register</h2>
            <h4 className="rating-header-second-header">Information</h4>
        </div>
        <div className="cardLayout">
            <Ratings1/>
            <div className="line"></div>
            <Ratings1/>
            <div className="line"></div>
            <Ratings1/>
        </div>
        </div>
    </React.Fragment>)
}

export default RatingPage;