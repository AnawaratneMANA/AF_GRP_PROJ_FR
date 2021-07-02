import React, {useEffect, useState} from 'react'
import Ratings1 from "../../Ratings/Ratings1";
import './feedbackstyles.scss';
import FeedBackForm from "../../Ratings/FeedBackForm/FeedBackForm";
import Speaker from "../../KeySpeakers/SpeakersImges/profile.webp";
import KeySpeakerForm from "../../KeySpeakers/KeySpeakersForm/KeySpeakerForm";
import {useSelector} from "react-redux";
import axios from "axios";
import KeySpeaker1 from "../../KeySpeakers/KeySpeaker1";

function FeedBackAllPage() {

    const [feedbackData, setFeedbackData] = useState([]);
    const users = useSelector((state) => state.users);
    const [flag, setFlag] = useState(null)

    const fetchFeedBackDetails = async () => {
        try {
            const response = await axios
                .get("http://localhost:8093/api/v1/feedbacks")
                .catch((error) => {
                    console.log("Error", error);
                });
            setFeedbackData(response.data)

        } catch (err) {
            console.log("Error");
            console.log(err.message);
        }
    }

    useEffect(() => {
        fetchFeedBackDetails();
    }, [])

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

    return (
        <div className="downloadallpage">
            <h1>All Feedback page</h1>
            <div className="alldownloadlist">
                <div className={"feed-back-form"}>
                    <FeedBackForm/>
                </div>
                <div className="all-feedback-row">
                    <div className="cardLayout">
                        {feedbackData.map((row) => (
                            console.log(row),
                                <KeySpeaker1 rows={row}/>
                        ))}
                        {/*{rows.map((row)=> (*/}
                        {/*    <div className="card-rating">*/}
                        {/*        <Ratings1 rows={row}/>*/}
                        {/*    </div>*/}
                        {/*))}*/}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FeedBackAllPage