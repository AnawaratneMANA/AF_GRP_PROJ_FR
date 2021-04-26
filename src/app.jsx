import React from 'react';
import Register from './components/Register/Register'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Container, AppBar, Typography, Grow, Grid} from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Posts from './components/Register/Register';
import Login from "./components/Login/Login";

const App = () => {

//Add the React Router And Create Routing
        return (
                <BrowserRouter>
                    <Navbar/>
                    <Switch>
                    <Route path = "/login" exact component={Login}/>
                    <Route path = "/register" component={Register}/>
                    </Switch>
                </BrowserRouter>
        )  
}

export default App;
