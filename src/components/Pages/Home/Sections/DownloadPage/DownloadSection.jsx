import React, {useEffect, useState} from 'react';
import './downloadstyles.css';
import {BrowserRouter as Router, useHistory} from 'react-router-dom';
import DownloadComponent from "./DownloadComponent/DownloadComponent";
import axios from "axios";

function DownloadSection() {

    const history = useHistory();
    const [categoryData, setCategoryData] = useState([]);
    // const [downloadHeader, setDownloadHeader] = useState("Download Header");
    // const [downloadSecondHeader, setDownloadSecondHeader] = useState("Download Description");

    const handleHistory = () => {

        history.push('/alldownloadPage');
    }

    // const rows = [
    //     {"header":'Templates', "description": 'Empty Templates'},
    //     {"header":'Research Papers', "description": 'Empty Research Papers'},
    //     {"header":'Research Papers', "description": 'Completed Research Papers'},
    //     {"header":'PDF Documents', "description": 'Attached PDF document files'},
    //     {"header":'Video Files', "description": 'Attached Video Files'}
    // ];

    const fetchDownloadCategoryDetails1 = async () => {
        try {
            const response = await axios
                .get("http://localhost:8093/api/v1/categories")
                .catch((error) => {
                    console.log("Error", error);
                });
            setCategoryData(response.data)

        } catch (err) {
            console.log("Error");
            console.log(err.message);
        }
    }

    useEffect(() => {
        fetchDownloadCategoryDetails1();
    }, [])

    return (
        <div className = "download-main-container download">
            <div className="header">
                
                <button className="download-main-container-download-button" onClick ={(e) => {
                        e.preventDefault();
                        handleHistory();
                    }}>View All</button>

                <h3 className="main">Download Page</h3>
                <p className="second">information</p>
            </div>
            <div className="cardLayout">
                {categoryData.slice(0,4).map((row) => (
                    console.log(row),
                        <DownloadComponent header={row.downloadHeader} description={row.downloadDescription}/>
                ))}
            {/*{rows.map((row) => (*/}
            {/*    <DownloadComponent header={row.header} description={row.description}/>*/}
            {/*))}*/}
            </div>
    </div>)
}
export default DownloadSection;
