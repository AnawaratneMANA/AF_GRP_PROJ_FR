import React from 'react';
import KeySpeaker1 from "../../../../KeySpeakers/KeySpeaker1";
import './keyspeakers.css'
function SpeakersPage() {
    return (<React.Fragment>
        <div className="speaker-section">
            <div className="speaker-header">
                <h2 className="speaker-header-main-header">Key Speakers</h2>
                <h4 className="speaker-header-second-header">Information</h4>
            </div>
            <div className="cardLayout">
                <div className="card-speaker">
                <KeySpeaker1/>
                </div>
                <div className="card-speaker">
                    <KeySpeaker1/>
                </div>
                <div className="card-speaker">
                    <KeySpeaker1/>
                </div>
            </div>
        </div>


    </React.Fragment>)
}

export default SpeakersPage;
