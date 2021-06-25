import React from 'react'
import '../../../../../CSS/event.css';
function EventComponent(props) {
    return (
        <div>
            <div className="event">
                <div className="eventImage">
                        <img src={props.image} alt="" className="image" />
                 </div>
                <div className="event__info">
                    <h2 className="eventTitle1">{props.title1}</h2>
                    <p className="eventTitle2">{props.title2}</p>
                </div>
                
                
            </div>
        </div>
    )
}

export default EventComponent
