import React from 'react'
import '../../../../../CSS/event.scss';
function EventComponent({rows}) {
    return (
        <div>
            <div className="event">
                <div className="eventImage">
                        <img src={rows.image} alt="" className="image" />
                 </div>
                <div className="event-info">
                    <h2 className="event-info-main-title">{rows.title1}</h2>
                    <p className="event-info-second-title">{rows.title2}</p>
                </div>
            </div>
        </div>
    )
}

export default EventComponent
