import React from 'react';
import Register from './components/Register/Register';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navigation/Navbar";
import Login from "./components/Login/Login";
import './App.css';
import EventPage from "./components/Pages/Home/Sections/EventPage/EventPage";
import Home from './components/Pages/Home/Home';
import LoginPage from './components/Pages/LoginPage/LoginPage';
import PaymentPage from "./components/Pages/PaymentPage/PaymentPage";

const App = () => {

//Add the React Router And Create Routing
        return (
                <BrowserRouter>
                    <Navbar/>
                    <Switch>
                    <Route path = "/" exact component={Home}/>
                    <Route path = "/register" component={Register}/>
                    <Route path = "/loginpage" component={LoginPage}/>
                    <Route path = "/services" component={EventPage}/>
                    <Route path = "/payment" component={PaymentPage}/>
                    </Switch>
                </BrowserRouter>
        )  
}

export default App;
