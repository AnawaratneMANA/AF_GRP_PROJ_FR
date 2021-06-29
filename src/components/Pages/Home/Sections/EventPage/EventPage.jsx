import React, {useEffect} from 'react'
import EventComponent from "./EventComponent";
import '../../../../../CSS/event.scss';
import event1 from "../../../../../Images/EventImages/screen6.jpg";

const EventPage = () => {
    return (<React.Fragment>
            
            <div className="mainheader">
                <div className="header">
                    <button className="button">View All</button>
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
