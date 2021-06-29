import React, {useEffect, useState} from 'react'
import EditorContentTable from './AdminComponents/EditorContentTable'
import UserdetailForm from './AdminComponents/UserdetailForm'
import UserDetailTable from './AdminComponents/UserDetailTable'
import './AdminPage.css'
import TotalDownloadGraph from "./AdminComponents/TotalDownloadGraph";
import EventGraph from "./AdminComponents/EventGraph";
import AdminFileTable from "./AdminComponents/AdminFileTable";

const AdminPage = () => {
    //const [userID, setUserID] = useState("");
    const [value, setValue] = useState("");
    useEffect(() => {

    }, [])
    
    return (<React.Fragment>
            
            {/*<div className="adminInterface">*/}
            {/*    <div className="admin__container">*/}
            {/*        <div className="admin__row">*/}
            {/*        <h1> Monitoring Section </h1>*/}
            {/*        </div>*/}
            {/*        <div className="admin__row">*/}
            {/*            /!*<AdminStatistics/>*!/*/}
            {/*            <TotalDownloadGraph/>*/}
            {/*            <EventGraph/>*/}
            {/*        </div>*/}
            {/*        <div className="admin__row">*/}
            {/*            <EditorContentTable/>*/}
            {/*            /!*<EditorContentTable setvalue = {setSwitchChange} method ={SwitchChangeMethod}/>*!/*/}
            {/*        </div>*/}
            {/*        <div className="admin__row">*/}
            {/*            /!*<UserDetailTable method={setUserID}/>*!/*/}
            {/*            /!*<UserdetailForm value={userID}/>*!/*/}
            {/*        </div>*/}
            {/*        <div className="admin__row">*/}
            {/*            <AdminFileTable/>*/}
            {/*            /!*<EditorContentTable setvalue = {setSwitchChange} method ={SwitchChangeMethod}/>*!/*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </React.Fragment>
    )
}

export default AdminPage
