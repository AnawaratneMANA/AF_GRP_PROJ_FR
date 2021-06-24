import React from 'react';
import VideoLandingComponent from './Sections/VideoLandingPage/VideoLandingComponent';
import Footer from "./Sections/Footer/Footer";

function Home() {
    return (<React.Fragment>
        <VideoLandingComponent/>
        <p>Recent Activities & Conference</p>
        <p>Recent Activities in Detail</p>
        <p>Key Note Speakers</p>
        <p>Gallery Page</p>
        <p>Location and Events</p>
        <Footer/>
    </React.Fragment>)
}

export default Home;
