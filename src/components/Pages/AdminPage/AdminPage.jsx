import React from 'react'
import AdminStatistics from './AdminComponents/AdminStatistics'
import EditorContentTable from './AdminComponents/EditorContentTable'
import UserdetailForm from './AdminComponents/UserdetailForm'
import UserDetailTable from './AdminComponents/UserDetailTable'
import './AdminPage.scss'
function AdminPage() {
    return (<React.Fragment>
            
            <div className="adminInterface">
                <div className="admin__container">
                    <di className="admin__row">
                    <h1> Monitoring Section </h1>
                    </di>
                    <di className="admin__row">
                        <AdminStatistics/>
                    </di>
                    <di className="admin__row">
                        <EditorContentTable/>
                    </di>
                    <di className="admin__row">
                        <UserDetailTable/>
                        <UserdetailForm/>
                    </di>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AdminPage
