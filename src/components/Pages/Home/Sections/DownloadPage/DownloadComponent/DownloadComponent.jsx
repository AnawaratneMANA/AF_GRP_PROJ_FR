import React from 'react';
import './downloadcompostyles.css'
import {useHistory} from "react-router-dom";
function DownloadComponent({header, description}) {

    const history = useHistory();

    const handleHistory = (header) => {
        history.push(`/alldownloadlinkpage/${header}`);
    }

    return (
        <div className = "download-component">
            <div className="border border-0">
            </div>
            <div className="download-body">
                <div className="download-body-header">
                    <p className="download-body-header-main">
                        {header}
                    </p>
                    <p className="download-body-header-details">
                        {description}
                    </p>
                    <button className="download-body-button"
                        onClick ={(e) => {
                            e.preventDefault();
                            handleHistory(header)
                        }}>Download</button>
                </div>
            </div>
        </div>)
}
export default DownloadComponent;
