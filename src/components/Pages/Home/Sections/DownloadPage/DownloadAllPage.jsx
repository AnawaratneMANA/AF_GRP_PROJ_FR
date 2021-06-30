import React from 'react'
import './DownloadAllPage.css';
import DownloadComponent from './DownloadComponent/DownloadComponent';
function DownloadAllPage() {

    const rows = [
        {"header":'Templates', "description": 'Empty Templates'},
        {"header":'Research Papers', "description": 'Empty Research Papers'},
        {"header":'Research Papers', "description": 'Completed Research Papers'},
        {"header":'PDF Documents', "description": 'Attached PDF document files'},
        {"header":'Video Files', "description": 'Attached Video Files'}
    ];

    return (
        <div className="downloadallpage">
            <input type="search" name="" id="" className="searchdownloads" placeholder="search downloads" /><br />
            <h1 className="downloadallpage-header">All Download page</h1>
            <div className="alldownloadlist">
                <div className="alldownloadrow">
                    {rows.map((row) => (
                        <DownloadComponent header={row.header} description={row.description}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DownloadAllPage
