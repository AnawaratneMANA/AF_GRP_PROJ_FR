import React, {useState} from 'react';
import Register from './components/Register/Register';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navigation/Navbar";
import Login from "./components/Login/Login";
import './App.css';
import EventPage from "./components/Pages/Home/Sections/EventPage/EventPage";
import Home from './components/Pages/Home/Home';
import LoginPage from './components/Pages/LoginPage/LoginPage';
import PaymentPage from "./components/Pages/PaymentPage/PaymentPage";
import DownloadAllPage from './components/Pages/Home/Sections/DownloadPage/DownloadAllPage';
import DownloadLinkPage from './components/Pages/Home/Sections/DownloadPage/DownloadLinkPage';
import AdminPage from './components/Pages/AdminPage/AdminPage';
import {ProtectedRoute} from "./components/Login/ProtectedRoutes/protectedRoute";
import TestingEmptyComponent from "./components/TestingEmptyComponent/ProtectedEmptyComponent";


const App = () => {
//Add the React Router And Create Routing
        return (
                <BrowserRouter>
                    <Navbar/>
                    <Switch>
                    <Route path = "/" exact component={Home}/>
                    <Route path = "/register" component={Register}/>
                    <Route path = "/loginpage" component={LoginPage}/>
                    <ProtectedRoute exact path = "/services" component={TestingEmptyComponent}/>
                    <Route path = "/alldownloadPage" component={DownloadAllPage}/>
                    {/*<Route path = "/alldownloadlinkpage" component={DownloadLinkPage}/>*/}
                    <Route path = "/payment" component={PaymentPage}/>
                    <Route path = "/alldownloadlinkpage/:value" component={DownloadLinkPage}/>
                    <Route path = "/admin" component={AdminPage}/>
                    <ProtectedRoute exact path = "/empty" component={TestingEmptyComponent}/>
                    </Switch>
                </BrowserRouter>
        )  
}
export default App;
