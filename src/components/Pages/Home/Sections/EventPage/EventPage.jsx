import React from 'react'
import EventComponent from "./EventComponent";
import '../../../../../CSS/event.scss';
import AddEvent from "../../../Event/AddEvent";
import event1 from "../../../../../Images/EventImages/screen6.jpg";
import {BrowserRouter as Router, useHistory} from 'react-router-dom';

const EventPage = () => {

    const history = useHistory();

    const handleHistory = () => {
        history.push('/eventpage');
    }

    return (<React.Fragment>
            <div className="mainheader">
                <div className="header">
                    <button className="button"
                            onClick ={(e) => {
                                e.preventDefault();
                                handleHistory();
                            }}>View All</button>
                    <h3 className="main1">Event Page</h3>
                    <p className="second">This section contain all the events</p>
                </div>
                <br />
                <div className="home__container">
                    <div className="home__row">
                        <EventComponent title1="component1" title2="name1" image={event1}/>
                        <EventComponent title1="component2" title2="name2" image={event1}/>
                        <EventComponent title1="component3" title2="name3" image={event1}/>
                        <EventComponent title1="component4" title2="name4" image={event1}/>
                        <EventComponent title1="component1" title2="name1" image={event1}/>
                        {/*<EventComponent title1="component4" title2="name4" image={event1}/>*/}
                    </div>
                </div>
                <br/>
            </div>
        </React.Fragment>
    )
}

export default EventPage
