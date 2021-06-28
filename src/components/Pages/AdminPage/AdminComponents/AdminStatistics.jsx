import React from 'react'
import EventGraph from "./EventGraph";
import TotalDownloadGraph from "./TotalDownloadGraph";
import '../AdminPage.scss'
function AdminStatistics() {
    return (<React.Fragment>
        <div className="AdminStatistics">      
            <h1>Admin Stats</h1>
                <div className="admin__container">
                    <div className="admin__row">
                        <TotalDownloadGraph/>
                        <EventGraph/>
                     </div>
                 </div>
        </div>
        </React.Fragment>
    )
}

export default AdminStatistics
