import React  from "react";
import useFirestore from "../../../../../../Firebase/useFirestore";
import {Button} from '@material-ui/core';
import './FileGrid.scss'

const FileGrid = () => {

    //Getting Files from the FireStore Storage.
    /**
     * Use this if needed in any other place in the site.
     * **/
    const { docs } = useFirestore('images');
    console.log(docs);

        return (
            <div className="file-grid">
                <table className="table-latitude">
                    {/*<caption>Employee Information</caption>*/}
                    <thead>
                    <th>File Name</th>
                    <th>File Type</th>
                    <th>Download Link</th>
                    </thead>
                    <tfoot>
                    <tr>
                        <td colSpan="3">File Upload and Download Table.</td>
                    </tr>
                    </tfoot>
                    <tbody>

                {docs && docs.map(doc => (
                    <tr>
                    <th>{doc.name}</th>
                    <th>{doc.type}</th>
                    <th><Button style={{color: "#FFF"}}><a href={doc.url} download >Download</a></Button></th>
                    </tr>
                ))}
                    </tbody>
                    </table>
            </div>
        )
}

export default FileGrid;
