import React, {useEffect, useState} from 'react'
import AddEvent from "../Event/AddEvent";
import '../EventPage/EventMainPage.scss'
import EventPage from "../Home/Sections/EventPage/EventPage";
import {useSelector} from "react-redux";
import EventComponent from "../Home/Sections/EventPage/EventComponent";
import event1 from "../../../Images/EventImages/screen6.jpg";

const EventMainPage = () => {

    //Use States.
    const users = useSelector((state) => state.users);
    const [flag, setFlag] = useState(null)

    useEffect(()=> {
        if(users.userName === null){
            window.location.href='/loginpage';
        } else {
            setFlag(true);
        }
    }, [])

    if(!flag){
        return null;
    }

    const rows = [
        {"title1": 'component1',"title2": 'name1', "image": event1},
        {"title1": 'component2',"title2": 'name2', "image": event1},
        {"title1": 'component3',"title2": 'name3', "image": event1},
        {"title1": 'component4',"title2": 'name3', "image": event1},
        {"title1": 'component4',"title2": 'name3', "image": event1},
        {"title1": 'component4',"title2": 'name3', "image": event1},
    ];

    return (
        <React.Fragment>
            <div className="event-container">
                <div>
                    <AddEvent/>
                </div>
                <div>
                    <div className="home__container">
                        <div className="home__row">
                            {rows.map((row)=> (
                                <EventComponent rows = {row}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EventMainPage;
