import React from 'react'
import './DownloadAllPage.scss';
import DownloadComponent from './DownloadComponent/DownloadComponent';
import CategoryForm from "./CategoryForm/CategoryForm";
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
            <div className="download-category-form">
                <CategoryForm/>
            </div>
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
