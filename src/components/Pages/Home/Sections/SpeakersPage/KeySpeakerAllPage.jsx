import React, {useEffect, useState} from 'react'
// import './DownloadAllPage.scss';
// import DownloadComponent from './DownloadComponent/DownloadComponent';
// import CategoryForm from "./CategoryForm/CategoryForm";
import {useSelector} from "react-redux";
import Speaker from "../../../../KeySpeakers/SpeakersImges/profile.webp";
import KeySpeakerForm from "../../../../KeySpeakers/KeySpeakersForm/KeySpeakerForm";
import KeySpeaker1 from "../../../../KeySpeakers/KeySpeaker1";

function KeySpeakerAllPage() {

    // const users = useSelector((state) => state.users);
    // const [flag, setFlag] = useState(null)
    //
    // //Add this to protected Components to avoid unauthorized users from comming.
    // useEffect(()=> {
    //     if(users.userName === null){
    //         window.location.href='/loginpage';
    //     } else {
    //         setFlag(true);
    //     }
    // }, [])
    //
    // if(!flag){
    //     return null;
    // }


    const rows = [
        {"name":'Salitha Ekanayaka', "title": 'Bsc', "image": Speaker},
        {"name":'Nirmith Akash', "title": 'Bsc', "image": Speaker},
        {"name":'Jason Born', "title": 'SK', "image": Speaker},
        {"name":'John Doe', "title": 'N/A', "image": Speaker},
    ];

    return (
        <div className="downloadallpage">
            <input type="search" name="" id="" className="searchdownloads" placeholder="search downloads" /><br />
            <h1 className="downloadallpage-header">All Key Speakers page</h1>
            <div className="download-category-form">
                <KeySpeakerForm/>
            </div>
            <div className="alldownloadlist">
                <div className="alldownloadrow">
                    {rows.map((row) => (
                        <KeySpeaker1 header={row.name} description={row.title} image={row.image}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default KeySpeakerAllPage