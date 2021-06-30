import React, {useState} from 'react';
import './Speakers.css';
import Speaker from './SpeakersImges/profile.webp'




function KeySpeaker1({rows}){
    return(
        <div className="speaker">
            <div className="img_top">
                <img className='photo' src={rows.image}></img>
            </div>
            <div className="speaker-info">
                <h3 className="speaker-info-header">{rows.name}</h3>
                <p className="speaker-info-secondary">{rows.title}</p>
            </div>
        </div>
    );
}

export default KeySpeaker1;
