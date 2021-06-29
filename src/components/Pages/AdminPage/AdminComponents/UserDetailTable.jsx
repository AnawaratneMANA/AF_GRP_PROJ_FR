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
import {Button, Link} from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles({
    table: {
        minWidth: 600,

    },
});

function createData(name, type, id) {
    return { name, type, id};
}
const rows = [
    createData('Frozen yoghurt', 159, 6.0),
    createData('Ice cream sandwich', 237, 9.0),
    createData('Eclair', 262, 16.0),
    createData('Cupcake', 305, 3.7),
    createData('Gingerbread', 356, 16.0),
];
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

//const authAxios =
function UserDetailTable() {
    const classes = useStyles();
    const [userData, setuserData] = useState([]);
    const fetchUserDetails = async () => {
        try {
            const response = await axios
                .get("http://localhost:8093/api/v1/users")
                .catch((error) => {
                    console.log("Error", error);
                });
            setuserData(response.data)


            console.log(userData);

        } catch (err) {
            console.log("Error");
            console.log(err.message);
        }
    }

    useEffect(() => {
        fetchUserDetails();
    }, [])

    const updateUser = (id) => {
        console.log(id);
    }
    const deleteUser = (id) => {
        console.log(id);
    }

    return (
        <div>
            <TableContainer component={Paper} className="userdetailtable" >
                <h3>User detail Table</h3>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Full Name</TableCell>
                            <TableCell align="right">Type</TableCell>
                            <TableCell align="right">Update</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userData.map((row) => (
                            console.log(row),
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row"> {row.firstName + " " + row.lastName}</TableCell>
                                <TableCell align="right">{row.type}</TableCell>
                                <TableCell align="right">
                                    <Link onClick={ () => {updateUser(row.id)}}> <p>Update</p> </Link>
                                </TableCell>
                                <TableCell align="right">
                                    <Link onClick={ () => {deleteUser(row.id)}}> <p>Delete</p> </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default UserDetailTable
