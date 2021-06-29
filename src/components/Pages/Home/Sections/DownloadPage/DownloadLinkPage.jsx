import React from 'react'
import {  Link } from 'react-router-dom';
import './downloadstyles.css';
import UploadForm from "./UploadForm/UploadForm";
import FileGrid from "./UploadForm/FileGrid";
function DownloadLinkPage(props) {
    return (
        <div className ="downloadlinkpage">
            <h1>Download link page: {props.match.params.value}</h1>

            <h1>File Attachment Form</h1>
            <form>
                <UploadForm/>
                <FileGrid/>
            </form>
        </div>
    )
}
export default DownloadLinkPage
