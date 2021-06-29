import React from 'react'
import AddEvent from "../Event/AddEvent";
import './EventMainPage.css'
import EventPage from "../Home/Sections/EventPage/EventPage";

const EventMainPage = () => {

    //Use States.

    return (
        <React.Fragment>
            <div className="event-container">
                <div>
                    <AddEvent/>
                </div>
                <div>
                    <EventPage/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EventMainPage;
