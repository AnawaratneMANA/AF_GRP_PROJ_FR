import React from 'react';
import Register from './components/Register/Register'
import {BrowserRouter, Route} from 'react-router-dom'  
import { Container, AppBar, Typography, Grow, Grid, Switch} from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Posts from './components/TestingComponent/TComp';

const App = () => {

//Add the React Router And Create Routings

        return (
            <Container maxWidth={"lg"}>
                <BrowserRouter>
                    <Navbar/>
                    <Route path = "/posts" exact component={Posts}/>
                    <Route exact path = "/register">
                        <Register/>
                    </Route>
                </BrowserRouter>
            </Container>
        )
    
}

export default App;