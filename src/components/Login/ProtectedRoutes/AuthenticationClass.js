class Auth {
    constructor() {
            this.authenicated = false;
        }
        //Need to check before cart checkout

    login(token, userData) {
        //Token Validation
        /**
         * check the login name equals the token name. if set the flag and token in JWT or log out the user.
         *
         * **/

        /**
         * if token is valid then fetch the whole user to store the type of the user.
         *
         * **/

        //API validation
        localStorage.setItem('userName', userData.userName);
        localStorage.setItem('token', token);
        localStorage.setItem('flag', true);
        this.authenicated = true;
    }

    logout() {
        //Clear the Flag upon pressing log
        localStorage.setItem('userName', "");
        localStorage.setItem('token', "");
        localStorage.setItem('flag', false);
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
