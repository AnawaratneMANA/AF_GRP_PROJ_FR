
import React, {useState} from 'react'
import '../AdminPage.scss'
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import axios from "axios";


function TotalDownloadGraph() {
    axios.interceptors.request.use(
        config => {
            config.headers.authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.' +
                'eyJzdWIiOiJBa2FzaCIsInVzZXJUeXBlIjoieXl5dXUiLCJleHAiOj' +
                'E2MjQ5ODc3MzgsImlhdCI6MTYyNDk1MTczOH0.jvY3apk1gVawe043cHNBhcLPGBk8mQgjHTcGrG3A3lY';
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    )
    const [acceptvalue, setAcceptValue] = useState(70);
    const [rejectvalue, setRejectValue] = useState(30);

    let accept = {
        country: 'Russia',
         area: acceptvalue
    }
    let reject = {
        country: 'Canada',
        area: rejectvalue 
    }
    const data = [
        accept,
        reject  
        
    ];

    return (
        <div className="totaldownloadgraph">
            <h1>Download Graph</h1>
            <Paper className= "Paper">
                <Chart
                data={data}
                >
                <PieSeries
                    valueField="area"
                    argumentField="country"
                    
                />
                <Title
                    text="Area of Countries"
                />
                <Animation />
                </Chart>
            </Paper>
        </div>
    )
}

export default TotalDownloadGraph





