import '../AdminPage.scss'
import React, { useState, useEffect } from 'react';
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
import useFirestore from "../../../../Firebase/useFirestore";

const useStyles = makeStyles({
    table: {
        minWidth: 1350,
    },
});

function createData(id, name, organizor, type, status) {
    return { id, name, organizor, type, status};
}
const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 'notdefined'),
    createData('Ice cream sandwich', 237, 9.0, 37, 'notdefined'),
    createData('Eclair', 262, 16.0, 24, 'notdefined'),
    createData('Cupcake', 305, 3.7, 67, 'notdefined'),
    createData('Gingerbread', 356, 16.0, 49, 'notdefined'),
];

//function EditorContentTable({method, setvalue}) {

function AdminFileTable() {
    const classes = useStyles();
    const { docs } = useFirestore('images');
    const fetchResourceDetails = async () => {
        try {
            const response = await axios
                .get("")
                .catch((error) => {
                    console.log("Error", error);
                });
            console.log(response);



        } catch (err) {
            console.log("Error");
            console.log(err.message);
        }
    }

    useEffect(() => {
        // dispatch(timeEntryActions.getTimeEntryDetail())
        // fetchResourceDetails();
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
                            <TableCell>Event id</TableCell>
                            <TableCell align="right">Event Name</TableCell>
                            <TableCell align="right">Organizor Name</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {docs.map((row) => (
                            <TableRow key={row.url}>
                                <TableCell component="th" scope="row"> {row.url}</TableCell>
                                <TableCell align="right">{row.name}</TableCell>

                                {/*<TableCell align="right">*/}
                                {/*    <Link onClick={ () => {approve(row.id)}}> <p>Approve</p> </Link>*/}
                                {/*</TableCell>*/}
                                {/*<TableCell align="right">*/}
                                {/*    <Link onClick={() => {decline(row.id)}}> <p>Decline</p> </Link>*/}
                                {/*</TableCell>*/}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default AdminFileTable
