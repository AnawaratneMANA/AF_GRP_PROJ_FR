import React, {useState} from 'react';
import './KeySpeackerComponentHome.css';

function KeySpeakerComponentHome({rows}){
    return(
        <div className="home-speaker">
            <div className="img_top">
                <img className='photo' src={rows.image}/>
            </div>
            <div className="speaker-info">
                <h3 className="speaker-info-header">{rows.name}</h3>
                <p className="speaker-info-secondary">{rows.qualifications}</p>
            </div>
        </div>
    );
}

export default KeySpeakerComponentHome;
