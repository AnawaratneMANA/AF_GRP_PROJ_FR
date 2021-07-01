import React from 'react';
import VideoLandingComponent from './Sections/VideoLandingPage/VideoLandingComponent';
import RatingPage from "./Sections/RatingPage/RatingPage";
import SpeakersPage from "./Sections/SpeakersPage/SpeakersPage";
import Footer from "./Sections/Footer/Footer";
import DownloadSection from "./Sections/DownloadPage/DownloadSection";
import EventPage from "./Sections/EventPage/EventPage";
import Gallery from "./Sections/Gallery/Gallery";
import UploadForm from "./Sections/DownloadPage/UploadForm/UploadForm";
import Profile from "../UserProfile/Profile";



function Home() {
    return (<React.Fragment>
        <VideoLandingComponent/>
        <EventPage/>
        <DownloadSection/>
        {/*<p>Recent Activities in Detail</p>*/}
        {/*/!*<RatingPage/>*!/ Theres a issue in Rating Component*/}
        <SpeakersPage/>
        <Gallery/>
        {/*<Profile/>*/}
        <Footer/>
    </React.Fragment>)
}
export default Home;
