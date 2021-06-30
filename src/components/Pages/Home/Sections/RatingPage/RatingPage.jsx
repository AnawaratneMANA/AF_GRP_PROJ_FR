import React from 'react';
import Ratings1 from "../../../../Ratings/Ratings1";
import './ratingstyles.css'
import Speaker from "../../../../KeySpeakers/SpeakersImges/profile.webp";
import KeySpeaker1 from "../../../../KeySpeakers/KeySpeaker1";
function RatingPage() {

    const rows = [
        {"title": 'Rating 1',"description": 'We want to help',"stars": 5, "image": Speaker},
        {"title": 'Rating 1',"description": 'We want to help',"stars": 2, "image": Speaker},
        {"title": 'Rating 1',"description": 'We want to help',"stars": 4, "image": Speaker},
        {"title": 'Rating 1',"description": 'We want to help',"stars": 2, "image": Speaker},
    ];
    return (<React.Fragment>
        <div className="rating-section">
        <div className="rating-header">
            <h2 className="rating-header-main-header">Rating</h2>
            <h4 className="rating-header-second-header">Information</h4>
        </div>
        <div className="cardLayout">
            {rows.map((row)=> (
                <div className="card-rating">
                    {/*<KeySpeaker1 rows={row}/>*/}
                    <Ratings1 rows={row}/>
                    {/*<div className="line"></div>*/}
                </div>
            ))}
            {/*<Ratings1/>*/}

            {/*<Ratings1/>*/}
            {/*<div className="line"></div>*/}
            {/*<Ratings1/>*/}
        </div>
        </div>


    </React.Fragment>)
}

export default RatingPage;