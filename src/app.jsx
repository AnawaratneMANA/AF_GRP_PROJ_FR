import React from 'react';
import Register from './components/Register/Register'
import {BrowserRouter, Route} from 'react-router-dom'  
import { Container, AppBar, Typography, Grow, Grid, Switch} from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
//Add the React Router And Create Routings
    render(){
        return (<BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path = '/reg'>
                    <Register/>
                </Route>
            </Switch>
        </BrowserRouter>
        )
    }
}