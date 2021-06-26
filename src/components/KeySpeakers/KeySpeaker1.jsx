import React, {useState} from 'react';
import './Speakers.css';
import Speaker from './SpeakersImges/speaker.jpg'




function KeySpeaker1(){
    return(
        <div className="speaker">
            <div className="img_top">
                <img className='photo' src={Speaker}></img>
            </div>
            <div className="speaker-info">
                <h3 className="speaker-info-header">Akash</h3>
                <p className="speaker-info-secondary">Bsc.Software Engineering</p>
            </div>
        </div>
    );
}

export default KeySpeaker1;
