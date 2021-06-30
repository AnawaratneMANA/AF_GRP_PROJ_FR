import React, {useState} from 'react';
import { Grid, Paper, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {makeStyles} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import FileBase from 'react-file-base64';
import {Link} from "react-router-dom";

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


function FeedBackForm(){

    const classes = useStyles();
    const classes2 = useStyle();
    const dispatch = useDispatch();

    const[image, setImage] = useState();
    const[name, setName] = useState();
    const[qualifications, setQualification] = useState();


    //submit the data
    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {


        }
    }

    return (
        <div>
            <Paper className={classes.pageContent}>
                <h3>Key Speaker Form</h3>
                <form className={classes2.root} onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                label="Name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                label="Qualifications"
                                name="name"
                                value={qualifications}
                                onChange={(e) => setQualification(e.target.value)}
                            />
                            <div>
                                <FileBase
                                    type="file"
                                    multiple={false}
                                    onDone={({base64}) => setImage({...image, image: base64})}
                                />
                            </div>
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

export default FeedBackForm
