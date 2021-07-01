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
            <div className="download-link-page-container-form">
                <UploadForm/>
                <FileGrid/>
            </div>

        {/*<div className ="downloadlinkpage">*/}
        {/*    <h1>Download link page: {props.match.params.value}</h1>*/}

            {/*<h1>File Attachment Form</h1>*/}
            {/*<form>*/}
            {/*    /!*Add the component here.*!/*/}

            {/*</form>*/}
        {/*</div>*/}
        </div>


    )
}
export default DownloadLinkPage
