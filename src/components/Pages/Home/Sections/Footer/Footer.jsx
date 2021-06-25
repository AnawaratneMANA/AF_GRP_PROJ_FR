import React from "react";
import './Footerstyle.css'
import facebook from './logo/facebook.svg'
import twitter from'./logo/twitter.svg'
import linkedin from './logo/linkedin.svg'
import whatsapp from'./logo/whatsapp.svg'
import instagram from'./logo/instagram.svg'

const Footer = ( ) =>{

    return(
        <footer>
            <div className="footer-logo">
                <h1>Logo</h1>
            </div>
            <div className="footer-container">
                <h3 className="footer-headings">About Us</h3>
                <div className="content-container">We want to help sharing review materials and documents to the users </div>
            </div>
            <div className="footer-container">
                <h3 className="footer-headings">Information</h3>
                <div className="content-container">We want to help sharing review materials and documents to the users </div>
            </div>
            <div className="footer-container">
                <h3 className="footer-headings">Contact Us</h3>
                <div className="content-container">+94770456890</div>
                <div className="content-container">reserchpapers@research.com</div>
            </div>
            <div className="footer-container">
                <h3 className="footer-headings">Helpful Links</h3>
                <div className="content-container">
                    <img className="footer-social" src={facebook}/>
                    <img className="footer-social" src={twitter}/>
                    <img className="footer-social" src={linkedin}/>
                    <img className="footer-social" src={whatsapp}/>
                    <img className="footer-social" src={instagram}/>
                </div>
            </div>
            <div className="footer-container">
                <h3 className="footer-headings">Feedback</h3>
                    <div className="feedback-input">
                        <form>
                            <div className="feedback-fields">
                                <label className="feedback-label">Email Address :</label>
                                <input className="footer-input"type="text" placeholder="Email Address"></input>
                            </div>
                            <div className="feedback-fields">
                                <label className="feedback-label">Message :</label>
                                <textarea className="footer-input" placeholder="Message "></textarea>
                            </div>
                            <button className="auth-button" type="submit">Send</button>
                        </form>
                    </div>
                </div>
            <div className="sub-footer">
                © CopyRights 2021 Reserch Papers || All rights reserved
            </div>
        </footer>

    )

}
export default Footer