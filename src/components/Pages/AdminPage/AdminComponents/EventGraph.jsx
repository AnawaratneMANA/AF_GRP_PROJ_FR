import '../AdminPage.scss'
import React, {useEffect, useState} from 'react'
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import axios from "axios";

function EventGraph() {
    // axios.interceptors.request.use(
    //     config => {
    //         config.headers.authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.' +
    //             'eyJzdWIiOiJBa2FzaCIsInVzZXJUeXBlIjoieXl5dXUiLCJleHAiOj' +
    //             'E2MjQ5ODc3MzgsImlhdCI6MTYyNDk1MTczOH0.jvY3apk1gVawe043cHNBhcLPGBk8mQgjHTcGrG3A3lY';
    //         return config;
    //     },
    //     error => {
    //         return Promise.reject(error);
    //     }
    // )
    const data = [
        { year: '2015', population: 140 },
        { year: '2016', population: 150 },
        { year: '2017', population: 160 },
        { year: '2018', population: 170 },
        { year: '2019', population: 180 },
        { year: '2020', population: 190 },
    ];

    const [chartData, setchartData] = useState(data)


    // useEffect(() => {
    //     fetchEventDetails();
    // }, [])
    return (
        <div>
           <h1>Event Graph</h1>
           <Paper className= "Paper">
                <Chart
                    data={chartData}
                >
                    <ArgumentAxis />
                    <ValueAxis max={200} />

                    <BarSeries
                        valueField="population"
                        argumentField="year"
                    />
                    <Animation />
                </Chart>
            </Paper>
        </div>
    )
}
export default EventGraph

