import React from "react";
import {useSelector} from "react-redux";

class Auth {

    constructor() {
            this.authenicated = false;
        }
        //Need to check before cart checkout

    login(name, jwt, userType) {
        //API validation
        localStorage.setItem('userName', name);
        localStorage.setItem('token', jwt);
        localStorage.setItem('flag', userType);
        console.log("Login")
        this.authenicated = true;
    }

    logout() {
        //Clear the Flag upon pressing log
        localStorage.setItem('userName', "");
        localStorage.setItem('token', "");
        localStorage.setItem('flag', false);
        console.log("Login")
        this.authenicated = false;
    }

    isAuthenticated() {
        const flag = localStorage.getItem('flag')
        console.log("Localstorage Values - " + flag);
        if(flag === 'true'){
            return true;
        } else {
             return false;
        }
    }
}
export default new Auth();
