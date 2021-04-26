import React from 'react';
import Register from './components/Register/Register'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import LoginPage from './components/Pages/LoginPage/LoginPage'

const App = () => {

//Add the React Router And Create Routing
        return (
                <BrowserRouter>
                    <Navbar/>
                    <Switch>
                    <Route path = "/login" exact component={Login}/>
                    <Route path = "/register" component={Register}/>
                    <Route path = "/loginpage" component={LoginPage}/>
                    </Switch>
                </BrowserRouter>
        )  
}

export default App;
