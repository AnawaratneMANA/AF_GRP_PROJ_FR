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
                    <h1>{props.title1}</h1>
                    <h4>{props.title2}</h4>
                </div>
                
                
            </div>
        </div>
    )
}

export default EventComponent
