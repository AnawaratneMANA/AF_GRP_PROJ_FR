import React from 'react'
import './downloadstyles.css';
import DownloadComponent from './DownloadComponent/DownloadComponent';
function DownloadAllPage() {
    return (
        <div className="downloadallpage">
            <input type="search" name="" id="" className="searchdownloads" placeholder="search downloads" /><br />
            <h1>All Download page</h1>
            <div className="alldownloadlist">
                <div className="alldownloadrow">
                    <DownloadComponent/>
                    <DownloadComponent/>
                    <DownloadComponent/>
                    <DownloadComponent/>
                    <DownloadComponent/>
                    <DownloadComponent/>
                    <DownloadComponent/>
                    <DownloadComponent/>
                    <DownloadComponent/>
                    <DownloadComponent/>
                    <DownloadComponent/>
                    <DownloadComponent/>
                    <DownloadComponent/>
                    <DownloadComponent/>
                    <DownloadComponent/>
                    <DownloadComponent/>
                    <DownloadComponent/>
                    <DownloadComponent/>
                </div>
            </div>
        </div>
    )
}

export default DownloadAllPage
