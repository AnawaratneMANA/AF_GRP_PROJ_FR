import React from 'react'
import {  Link } from 'react-router-dom';
import './DownloadLinkPage.scss';
import UploadForm from "./UploadForm/UploadForm";
import FileGrid from "./UploadForm/FileGrid";
function DownloadLinkPage(props) {
    return (
        <div className ="download-link-page-container">
            <h1 className="download-link-page-container-header">Download link page: {props.match.params.value}</h1>
            <h2 className="download-link-page-container-second">File Attachment Form</h2>
            <form className="download-link-page-container-form">
                <UploadForm/>
                <FileGrid/>
            </form>
        </div>
    )
}
export default DownloadLinkPage
