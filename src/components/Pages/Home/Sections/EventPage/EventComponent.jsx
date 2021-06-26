import React from 'react'
import '../../../../../CSS/event.scss';
function EventComponent(props) {
    return (
        <div>
            <div className="event">
                <div className="eventImage">
                        <img src={props.image} alt="" className="image" />
                 </div>
                <div className="event-info">
                    <h2 className="event-info-main-title">{props.title1}</h2>
                    <p className="event-info-second-title">{props.title2}</p>
                </div>
            </div>
        </div>
    )
}

export default EventComponent
