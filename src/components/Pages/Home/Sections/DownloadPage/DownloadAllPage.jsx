import React, {useEffect, useState} from 'react'
import './DownloadAllPage.scss';
import DownloadComponent from './DownloadComponent/DownloadComponent';
import CategoryForm from "./CategoryForm/CategoryForm";
import {useSelector} from "react-redux";
import axios from "axios";
function DownloadAllPage() {

    const [categoryData, setCategoryData] = useState([]);
    const users = useSelector((state) => state.users);
    const [flag, setFlag] = useState(null)
    const [isSubmited, setIsSubmitted] = useState(false);

    const fetchDownloadCategoryDetails = async () => {
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
        fetchDownloadCategoryDetails();
    }, [isSubmited])

    // Add this to protected Components to avoid unauthorized users from comming.
    useEffect(()=> {
        if(users.userName === null){
            window.location.href='/loginpage';
        } else {
            setFlag(true);
        }
    }, [])

    if(!flag){
        return null;
    }

    return (
        <div className="downloadallpage">
            <input type="search" name="" id="" className="searchdownloads" placeholder="search downloads" /><br />
            <h1 className="downloadallpage-header">All Download page</h1>
            <div className="download-category-form">
                <CategoryForm isSubmitted = {setIsSubmitted}/>
            </div>
            <div className="alldownloadlist">
                <div className="alldownloadrow">
                    {categoryData.map((row) => (
                        console.log(row),
                        <DownloadComponent header={row.downloadHeader} description={row.downloadDescription}/>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default DownloadAllPage
