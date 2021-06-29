import React from 'react'
import Ratings1 from "../../Ratings/Ratings1";
import './feedbackstyles.scss';
import FeedBackForm from "../../Ratings/FeedBackForm/FeedBackForm";

function FeedBackAllPage() {
    return (
        <div className="downloadallpage">
            <h1>All Feedback page</h1>
            <FeedBackForm/>
            <div className="alldownloadlist">
                <div className="alldownloadrow">
                    <Ratings1/>
                    <Ratings1/>
                    <Ratings1/>
                    <Ratings1/>
                    <Ratings1/>
                    <Ratings1/>
                    <Ratings1/>
                    <Ratings1/>
                    <Ratings1/>
                    <Ratings1/>
                    <Ratings1/>
                    <Ratings1/>
                    <Ratings1/>
                    <Ratings1/>
                    <Ratings1/>
                    <Ratings1/>
                    <Ratings1/>
                    <Ratings1/>
                    <Ratings1/>
                    <Ratings1/>

                </div>
            </div>
        </div>
    )
}

export default FeedBackAllPage