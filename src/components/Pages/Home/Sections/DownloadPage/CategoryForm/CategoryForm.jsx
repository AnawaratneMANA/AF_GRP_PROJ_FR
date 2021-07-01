import React, {useEffect, useState} from 'react';
import { Grid, Paper, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {makeStyles} from '@material-ui/core';
import axios from "axios";
import {useSelector} from "react-redux";

const useStyles = makeStyles(theme => ({
    pageContent: {
        padding: theme.spacing(3),
        margin: theme.spacing(2),
        width: theme.spacing(70),
        height: theme.spacing(60)
    }
}))

const useStyle = makeStyles(theme => ({
    root:{
        '& .MuiFormControl-root':{
            width: theme.spacing(50),
            margin:theme.spacing(2)
        }
    }
}))


const CategoryForm = () => {

    const classes = useStyles();
    const classes2 = useStyle();
    // const dispatch = useDispatch();

    const users = useSelector((state) => state.users);
    const [flag, setFlag] = useState(null)
    const[downloadHeader, setCategory] = useState("");
    const[downloadDescription, setDescription] = useState("");

    axios.interceptors.request.use(
        config => {
            config.headers.authorization = 'Bearer ' + users.userToken;
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    )

    useEffect(()=> {
        if(users.userType === "uu"){
            window.location.href='/loginpage';
        } else {
            setFlag(true);
        }
    }, [])

    if(!flag){
        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            downloadHeader,
            downloadDescription
        }

        console.log(data)
        axios.post('http://localhost:8093/api/v1/download/category', data).then(() => {
        }).catch((err) => {
            console.log(err);
            alert("Category data not inserted");
        })
    }

    return (
        <div>
            <Paper className={classes.pageContent}>
                <h3>Insert Category Form</h3>
                <form className={classes2.root} onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                label="Category Name"
                                name="name"
                                value={downloadHeader}
                                onChange={(e) => setCategory(e.target.value)}
                            />

                            <TextField
                                variant="outlined"
                                label="Description"
                                name="name"
                                value={downloadDescription}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <Button variant="contained" type='Submit' style={{background: "#1976d2", color:"white", width:"150px", marginTop:"40px"}} >
                                SUBMIT
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </div>
    )
}

export default CategoryForm
