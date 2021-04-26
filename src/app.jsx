import React from 'react';
import Register from './components/Register/Register'
import {BrowserRouter, Route} from 'react-router-dom'  
import { Container, AppBar, Typography, Grow, Grid, Switch} from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Posts from './components/Register/Register';

const App = () => {

//Add the React Router And Create Routings

        return (
            <Container maxWidth={"lg"}>
                <BrowserRouter>
                    <Navbar/>
                    <Route path = "/posts" exact component={Posts}/>
                    <Route exact path = "/register">

                    <Grow in>
                    <Grid container justify= "space-between" alignItems= "stretch" spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Register/>
                    </Grid>
                    </Grid>
                    </Grow> 
                    </Route>
                </BrowserRouter>
            </Container>
        )  
}

export default App;