import React from 'react';
import VideoLandingComponent from './Sections/VideoLandingPage/VideoLandingComponent';
import RatingPage from "./Sections/RatingPage/RatingPage";
import SpeakersPage from "./Sections/SpeakersPage/SpeakersPage";

function Home() {
    return (<React.Fragment>
        <VideoLandingComponent/>
        <p>Recent Activities & Conference</p>
        <p>Recent Activities in Detail</p>
        <RatingPage/>
        <SpeakersPage/>
        <p>Gallery Page</p>
        <p>Location and Events</p>
    </React.Fragment>)
}

export default Home;
