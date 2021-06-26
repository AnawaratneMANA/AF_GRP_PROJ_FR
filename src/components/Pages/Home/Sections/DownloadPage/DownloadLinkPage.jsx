import React from 'react'
import {  Link } from 'react-router-dom';
import './downloadstyles.css';
function DownloadLinkPage() {
    return (
        <div className ="downloadlinkpage">
            <h1>Download link page</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">file name</th>
                        <th scope="col">path</th>
                        <th scope="col">publisher name</th>
                        <th scope="col">category type</th>
                        <th scope="col">file type</th>
                        <th scope="col">link</th>
                    </tr>
                </thead>
               <tbody>
                   {/* needed to be change */}
                    <tr>
                        <td>1</td>
                        <td>file name</td>
                        <td>path</td>
                        <td>publisher name</td>
                        <td> category type</td>
                        <td>file type</td>
                        
                        <td><Link  rel="stylesheet" href="https://www.google.com/" >link</Link></td>
                    </tr>
               </tbody>
            </table>
        </div>
    )
}

export default DownloadLinkPage
