import React, {useEffect, useState} from 'react'
import EditorContentTable from './AdminComponents/EditorContentTable'
import UserdetailForm from './AdminComponents/UserdetailForm'
import UserDetailTable from './AdminComponents/UserDetailTable'
import './AdminPage.css'
import TotalDownloadGraph from "./AdminComponents/TotalDownloadGraph";
import EventGraph from "./AdminComponents/EventGraph";
import AdminFileTable from "./AdminComponents/AdminFileTable";
import CollapsComponent from "./CollapsComponent/CollapsComponent";

const AdminPage = () => {
    //const [userID, setUserID] = useState("");
    const [value, setValue] = useState("");
    useEffect(() => {

    }, [])
    
    return (<React.Fragment>
            <div className="adminInterface">
                <div className="admin__container">
                    <di className="admin__row">
                    <h1> Monitoring Section </h1>
                    </di>
                    <di className="admin__row1">
                        {/*<AdminStatistics/>*/}
                        <CollapsComponent/>
                        <CollapsComponent/>
                        <CollapsComponent/>
                    </di>

                    <di className="admin__row">
                        {/*<AdminStatistics/>*/}
                        <TotalDownloadGraph/>
                        <EventGraph/>
                    </di>
                    <di className="admin__row">
                        <EditorContentTable/>
                        {/*<EditorContentTable setvalue = {setSwitchChange} method ={SwitchChangeMethod}/>*/}
                    </di>
                    <di className="admin__row">
                        <UserDetailTable/>
                        <UserdetailForm/>
                    </di>
                    <di className="admin__row">
                        <AdminFileTable/>
                        {/*<EditorContentTable setvalue = {setSwitchChange} method ={SwitchChangeMethod}/>*/}
                    </di>
                </div>
            </div>
        </React.Fragment>
    )
}
export default AdminPage
