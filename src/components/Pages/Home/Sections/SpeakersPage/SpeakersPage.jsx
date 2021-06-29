import React from 'react';
import KeySpeaker1 from "../../../../KeySpeakers/KeySpeaker1";
import Speaker from '../../../../KeySpeakers/SpeakersImges/profile.webp'
import './keyspeakers.css'

function SpeakersPage() {

    //Call API here and Replace the Array.

    const rows = [
        {"name":'Salitha Ekanayaka', "title": 'Bsc', "image": Speaker},
        {"name":'Nirmith Akash', "title": 'Bsc', "image": Speaker},
        {"name":'Jason Born', "title": 'SK', "image": Speaker},
        {"name":'John Doe', "title": 'N/A', "image": Speaker},
    ];

    return (<React.Fragment>
        <div className="speaker-section">
            <div className="speaker-header">
                <h2 className="speaker-header-main-header">Key Speakers</h2>
                <h4 className="speaker-header-second-header">Information</h4>
            </div>
            <div className="cardLayout">
                    {rows.map((row)=> (
                        <div className="card-speaker">
                        <KeySpeaker1 rows={row}/>
                        </div>
                    ))}
            </div>
        </div>


    </React.Fragment>)
}

export default SpeakersPage;
