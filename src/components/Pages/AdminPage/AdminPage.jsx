import React, {useEffect, useState} from 'react'
import EditorContentTable from './AdminComponents/EditorContentTable'
import UserdetailForm from './AdminComponents/UserdetailForm'
import UserDetailTable from './AdminComponents/UserDetailTable'
// import './AdminPage.css'
import TotalDownloadGraph from "./AdminComponents/TotalDownloadGraph";
import EventGraph from "./AdminComponents/EventGraph";
import AdminFileTable from "./AdminComponents/AdminFileTable";
import CollapsComponent from "./CollapsComponent/CollapsComponent";
import {useSelector} from "react-redux";
import useFirestore from "../../../Firebase/useFirestore";
import axios from "axios";

const AdminPage = () => {
    const users = useSelector((state) => state.users);
    const [flag, setFlag] = useState(null)
    const [tableUser, setTableUser] = useState([]);
    const [isSubmited, setIsSubmitted] = useState(false);
    const [eventArray, setEventArray] = useState();
    const [userData, setuserData] = useState([]);
    //Add this to protected Components to avoid unauthorized users from comming.

    const { docs } = useFirestore('images');
    let totaldown = docs.length;

    useEffect(() => {
        fetchUserDetails();
    }, [])

    const fetchUserDetails = async () => {
        try {
            const response = await axios
                .get("http://localhost:8093/api/v1/users")
                .catch((error) => {
                    console.log("Error", error);
                });
            setuserData(response.data)

        } catch (err) {
            console.log("Error");
            console.log(err.message);
        }
    }



    const data = [{
        id: 1,
        Heading: "Total Files",
        description:"Number of total file uploads in the website",
        Total: totaldown
    },{
        id: 2,
        Heading: "Total Users",
        description:"Total Users in the website",
        Total: userData.length
    }]

    console.log(data);


    const [eventArray, setEventArray] = useState([]);
    //Add this to protected Components to avoid unauthorized users from comming.kkkk
    useEffect(()=> {
        if(users.userType != "Admin"){
            window.location.href='/loginpage';
        } else {
            setFlag(true);
        }
    }, [])

    if(!flag){
        return null;
    }



    return (<div>
            
            <div className="adminInterface">
                <div className="admin__container">
                    <div className="admin__row">
                    <h1> Monitoring Section </h1>
                        <CollapsComponent/>
                    </div>
                    <div className="admin__row1">
                        {data.map((value) => (
                            <CollapsComponent value = {value}/>
                            ))}

                    </div>
                    <div className="admin__row">
                        {/*<AdminStatistics/>*/}
                        <TotalDownloadGraph/>
                        <EventGraph/>
                    </div>
                    <div className="admin__row">
                        <EditorContentTable isSubmit ={isSubmited} isSubmitted = {setIsSubmitted}/>
                        {/*<EditorContentTable setvalue = {setSwitchChange} method ={SwitchChangeMethod}/>*/}
                    </div>
                    <div className="admin__row">
                        <UserDetailTable method={setTableUser} isSubmit ={isSubmited} isSubmitted = {setIsSubmitted}/>
                        <UserdetailForm value={tableUser} isSubmitted = {setIsSubmitted}/>
                    </div>
                    <div className="admin__row">
                        <AdminFileTable/>
                        {/*<EditorContentTable setvalue = {setSwitchChange} method ={SwitchChangeMethod}/>*/}
                    </div>
                </div>
            </div>

            Hello.
        </div>
    )
}

export default AdminPage
