import React, {useEffect, useState} from 'react'
import './KeySpeakersAllPage.scss';
import {useSelector} from "react-redux";
import Speaker from "../../../../KeySpeakers/SpeakersImges/profile.webp";
import KeySpeakerForm from "../../../../KeySpeakers/KeySpeakersForm/KeySpeakerForm";
import KeySpeaker1 from "../../../../KeySpeakers/KeySpeaker1";

function KeySpeakerAllPage() {

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
        {"name":'Salitha Ekanayaka', "title": 'Bsc', "image": Speaker},
        {"name":'Nirmith Akash', "title": 'Bsc', "image": Speaker},
        {"name":'Jason Born', "title": 'SK', "image": Speaker},
        {"name":'John Doe', "title": 'N/A', "image": Speaker},
    ];

    return (
        <div className="key-speaker-page">
            <h1>All Key Speakers page</h1>
            <input type="search" name="" id="" className="search-speakers" placeholder="search downloads" /><br />
            <div className="key-speakers-form">
                <KeySpeakerForm/>
            </div>
            <div className="all-key-speakers-list">
                <div className="all-key-speakers-row">
                    {rows.map((row) => (
                        <KeySpeaker1 rows={row}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default KeySpeakerAllPage