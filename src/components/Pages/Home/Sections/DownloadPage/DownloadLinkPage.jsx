import React, {useEffect, useState} from 'react'
import {  Link } from 'react-router-dom';
import './DownloadLinkPage.scss';
import UploadForm from "./UploadForm/UploadForm";
import FileGrid from "./UploadForm/FileGrid";
import {useSelector} from "react-redux";
function DownloadLinkPage(props) {
    const users = useSelector((state) => state.users);
    const [flag, setFlag] = useState(null)
    //Add this to protected Components to avoid unauthorized users from comming.
    useEffect(()=> {
        if(users.userType === null){
            window.location.href='/loginpage';
        } else {
            setFlag(true);
        }
    }, [])

    if(!flag){
        return null;
    }

    return (
        <div className ="download-link-page-container">
            <h1 className="download-link-page-container-header">Download link page: {props.match.params.value}</h1>
            <h2 className="download-link-page-container-second">File Attachment Form</h2>
            <div className="download-link-page-container-form">
                <UploadForm/>
                <FileGrid/>
            </div>
        </div>


    )
}
export default DownloadLinkPage
