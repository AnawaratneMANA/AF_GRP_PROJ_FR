import React from 'react';
import VideoLandingComponent from './Sections/VideoLandingPage/VideoLandingComponent';
import DownloadSection from "./Sections/DownloadPage/DownloadSection";

function Home() {
    return (<React.Fragment>
        <VideoLandingComponent/>
        <DownloadSection/>
        <p>Recent Activities in Detail</p>
        <p>Key Note Speakers</p>
        <p>Gallery Page</p>
        <p>Location and Events</p>
    </React.Fragment>)
}

export default Home;
