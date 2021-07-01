import React from "react";
import './style.css'


const Profile  = ( ) =>{

    return(
        <div id="main-profile-div">
            <div id="profil-container">
                <h1 id="profile">Profile</h1>
            </div>
            <img id="profile-picture" src="https://pbs.twimg.com/profile_images/1229609043108540416/cRAoH7_f_400x400.jpg" alt="Profile Picture"/>

            <div id="container-info">
                <ul>
                    <li><h3 id="name">Black Rose</h3></li>
                    <li id="mail">black.rose@icloud.com</li>
                    <li className="line"></li>
                    <li>
                        <h2 className="info">My Project</h2>
                    </li>
                    <li>
                        <h2 className="info">Account</h2>
                    </li>
                    <li>
                        <h2 className="info">Share with friends</h2>
                    </li>
                    <li>
                        <h2 className="info">Review</h2>
                    </li>
                    <li>
                        <h2 className="info">Info</h2>
                    </li>
                </ul>
                <div className="profile-button">
                    <div id="return" className="button">
                        <svg viewBox="0 0 1000 485">
                            <path
                                d="M11.5,270.2C11.5,270.2,11.5,270.2,11.5,270.2l204.1,203.2c15.3,15.2,40,15.2,55.2-0.1c15.2-15.3,15.2-40-0.1-55.2l-137-136.4h827.3c21.6,0,39.1-17.5,39.1-39.1c0-21.6-17.5-39.1-39.1-39.1H133.7l137-136.4c15.3-15.2,15.3-40,0.1-55.2c-15.2-15.3-40-15.3-55.2-0.1L11.5,214.8c0,0,0,0,0,0C-3.8,230.1-3.8,254.9,11.5,270.2z"/>
                        </svg>
                    </div>
                    <div id="save" className="button">save</div>
                </div>
                <div id="home-bar"></div>
            </div>

        </div>

    )}

export default Profile