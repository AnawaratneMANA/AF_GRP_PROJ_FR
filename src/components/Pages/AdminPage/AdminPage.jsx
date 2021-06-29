import React, {useState} from 'react'
import AdminStatistics from './AdminComponents/AdminStatistics'
import EditorContentTable from './AdminComponents/EditorContentTable'
import UserdetailForm from './AdminComponents/UserdetailForm'
import UserDetailTable from './AdminComponents/UserDetailTable'
import './AdminPage.scss'
import TotalDownloadGraph from "./AdminComponents/TotalDownloadGraph";
import EventGraph from "./AdminComponents/EventGraph";
import AdminFileTable from "./AdminComponents/AdminFileTable";
import CollapsComponent from "./CollapsComponent/CollapsComponent";

function AdminPage() {
    // const [switchChange, setSwitchChange] = useState(false);
    // const SwitchChangeMethod = (switchChange) => {
    //     setSwitchChange(switchChange);
    //     if(switchChange){
    //         console.log("Trye: " + switchChange);
    //     }else{
    //         console.log("Tryef: " + switchChange);
    //     }
    // }
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
