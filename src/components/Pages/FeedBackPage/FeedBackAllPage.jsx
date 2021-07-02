import React, {useEffect, useState} from 'react'
import Ratings1 from "../../Ratings/Ratings1";
import './feedbackstyles.scss';
import FeedBackForm from "../../Ratings/FeedBackForm/FeedBackForm";
import Speaker from "../../KeySpeakers/SpeakersImges/profile.webp";
import KeySpeakerForm from "../../KeySpeakers/KeySpeakersForm/KeySpeakerForm";
import {useSelector} from "react-redux";

function FeedBackAllPage() {

    const users = useSelector((state) => state.users);
    const [flag, setFlag] = useState(null)

    //Add this to protected Components to avoid unauthorized users from comming
    useEffect(()=> {
        if(users.userName === null){
            window.location.href='/loginpage';
        } else {
            setFlag(true);
        }
    }, [])

    if(!flag){
        return null;
    }

    const rows = [
        {"title": 'Rating 1',"description": 'We want to help',"stars": 5, "image": Speaker},
        {"title": 'Rating 2',"description": 'We want to help',"stars": 2, "image": Speaker},
        {"title": 'Rating 3',"description": 'We want to help',"stars": 4, "image": Speaker},
        {"title": 'Rating 4',"description": 'We want to help',"stars": 2, "image": Speaker},
    ];
    return (
        <div className="downloadallpage">
            <h1>All Feedback page</h1>
            <div className="alldownloadlist">
                <div className={"feed-back-form"}>
                    <FeedBackForm/>
                </div>
                <div className="all-feedback-row">
                    <div className="cardLayout">
                        {rows.map((row)=> (
                            <div className="card-rating">
                                <Ratings1 rows={row}/>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FeedBackAllPage