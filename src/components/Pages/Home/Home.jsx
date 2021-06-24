import React from 'react';
import VideoLandingComponent from './Sections/VideoLandingPage/VideoLandingComponent';
import Footer from "./Sections/Footer/Footer";
import DownloadSection from "./Sections/DownloadPage/DownloadSection";

function Home() {
    return (<React.Fragment>
        <VideoLandingComponent/>
        <DownloadSection/>
        <p>Recent Activities in Detail</p>
        <p>Key Note Speakers</p>
        <p>Gallery Page</p>
        <p>Location and Events</p>
        <Footer/>
    </React.Fragment>)
}

export default Home;
