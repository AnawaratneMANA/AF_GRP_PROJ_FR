import React from 'react';
import './downloadcompostyles.css'
function DownloadComponent() {

    return (
        <div className = "download-component">
            <div className="border border-0">
            </div>
            <div className="download-body">
                <div className="download-body-header">
                    <p className="download-body-header-main">
                        Download Templates.
                    </p>
                    <p className="download-body-header-details">
                        Documents and Templates Download.
                    </p>
                    <button className="download-body-button"
                        onClick ={(e) => {
                            e.preventDefault();
                            window.location.href='/alldownloadlinkpage/"title1"';
                        }}>Download</button>
                </div>
            </div>
        </div>)
}
export default DownloadComponent;
