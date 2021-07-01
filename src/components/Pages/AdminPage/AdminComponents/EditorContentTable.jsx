import '../AdminPage.scss'
import React, { useState, useEffect } from 'react';

import Switch from 'react-switch';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link} from "@material-ui/core";
import axios from 'axios';

const useStyles = makeStyles({
    table: {
        minWidth: 1350,
    },
});

//function EditorContentTable({method, setvalue}) {

function EditorContentTable() {

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
    const classes = useStyles();
    const [eventData, seteventData] = useState([]);
    const fetchEventDetails = async () => {
        try {
            const response = await axios
                .get("http://localhost:8093/api/v1/events")
                .catch((error) => {
                    console.log("Error", error);
                });
            console.log(response.data);
            seteventData(response.data)


        } catch (err) {
            console.log("Error");
            console.log(err.message);
        }
    }

    useEffect(() => {
       fetchEventDetails();
    }, [])
    
    const approve = (id) => {
        let value = "approve";
        console.log(value);
        console.log(id);
    }
    const decline = (id) => {
        let value = "decline";
        console.log(value);
        console.log(id);
    }
    return (
        <div>
            <TableContainer component={Paper} className="editorcontent" >
                <h1>Editor Content Table</h1>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Event id</TableCell>
                            <TableCell align="right">Event Name</TableCell>
                            <TableCell align="right">Organizor Name</TableCell>
                            <TableCell align="right">Event type</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Approve</TableCell>
                            <TableCell align="right">Reject</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {eventData.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell align="left">{row.id}</TableCell>
                                <TableCell align="right">{row.eventName}</TableCell>
                                <TableCell align="right">{row.organizerName}</TableCell>
                                <TableCell align="right">{row.eventType}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                                <TableCell align="right">
                                    <Link onClick={ () => {approve(row.id)}}> <p>Approve</p> </Link>
                                </TableCell>
                                <TableCell align="right">
                                    <Link onClick={() => {decline(row.id)}}> <p>Decline</p> </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default EditorContentTable
