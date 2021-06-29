import React, {useState} from 'react';
import './downloadstyles.css';
import {BrowserRouter as Router, useHistory} from 'react-router-dom';
import DownloadComponent from "./DownloadComponent/DownloadComponent";

function DownloadSection() {

    const history = useHistory();

    const [downloadHeader, setDownloadHeader] = useState("Download Header");
    const [downloadSecondHeader, setDownloadSecondHeader] = useState("Download Description");

    const handleHistory = () => {
        history.push('/alldownloadPage');
    }

    return (
        <div className = "download-main-container download">
            <div className="header">
                
                <button className="buttonDownload" onClick ={(e) => {
                        e.preventDefault();
                        handleHistory();
                    }}>View All</button>

                <h3 className="main">Download Page</h3>
                <p className="second">information</p>
            </div>
            <div className="cardLayout">
                <DownloadComponent/>
                <DownloadComponent/>
                <DownloadComponent/>
                <DownloadComponent/>
            </div>
    </div>)
}
export default DownloadSection;
