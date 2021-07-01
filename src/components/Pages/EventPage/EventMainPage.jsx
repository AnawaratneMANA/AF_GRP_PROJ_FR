import React, {useEffect, useState} from 'react'
import AddEvent from "../Event/AddEvent";
import '../EventPage/EventMainPage.scss'
import EventPage from "../Home/Sections/EventPage/EventPage";
import {useSelector} from "react-redux";

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
