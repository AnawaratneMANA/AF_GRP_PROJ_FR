import React from 'react';
import './downloadstyles.css';
import DownloadComponent from "./DownloadComponent/DownloadComponent";

function DownloadSection() {
    return (
        <div className = "download-main-container download">
            <div className="header">
                
                <button className="buttonDownload" onClick ={(e) => {
                        e.preventDefault();
                        window.location.href='/alldownloadPage';
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
