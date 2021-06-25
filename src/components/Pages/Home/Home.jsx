import React from 'react';
import VideoLandingComponent from './Sections/VideoLandingPage/VideoLandingComponent';
import RatingPage from "./Sections/RatingPage/RatingPage";
import SpeakersPage from "./Sections/SpeakersPage/SpeakersPage";
import Footer from "./Sections/Footer/Footer";
import DownloadSection from "./Sections/DownloadPage/DownloadSection";
import EventPage from "./Sections/EventPage/EventPage";



function Home() {
    return (<React.Fragment>
        <VideoLandingComponent/>
        <DownloadSection/>
        <EventPage/>
        {/*<p>Recent Activities in Detail</p>*/}
        <RatingPage/>
        <SpeakersPage/>
        <p>Gallery Page</p>
        <p>Location and Events</p>
        <Footer/>
    </React.Fragment>)
}
export default Home;
