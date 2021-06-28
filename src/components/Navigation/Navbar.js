import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import {Button} from "../Button/Button";
import './Navbar.css'
import EventPage from "../Pages/Home/Sections/EventPage/EventPage";
import PaymentPage from "../Pages/PaymentPage/PaymentPage";
import AdminPage from '../Pages/AdminPage/AdminPage';

function Navbar () {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const  handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(()=> {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <React.Fragment>
            <nav className= "navbar">
                <div className= "navbar-container">
                    <Link path = "/" className ="navbar-logo" onClick={closeMobileMenu}>
                        HOME <i className= "fa fa-university"/>
                    </Link>
                    <div className = "menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className= "nav-item">
                            <Link to= '/' className ="nav-links" onClick={closeMobileMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className= "nav-item">
                            <Link to= '/services' className ="nav-links" onClick={EventPage}>
                                EVENTS
                            </Link>
                        </li>
                        <li className= "nav-item">
                            <Link to= '/loginpage' className ="nav-links" onClick={closeMobileMenu}>
                                LOGIN
                            </Link>
                        </li>
                        {/*<li className= "nav-item">*/}
                        {/*    <Link to= '/register' className ="nav-links" onClick={closeMobileMenu}>*/}
                        {/*        REGISTER*/}
                        {/*    </Link>*/}
                        {/*</li>*/}

                        {/* this is need to be added  */}
                        {/* <li className= "nav-item">
                            <Link to= '/payment' className ="nav-links" onClick={PaymentPage}>
                                PAYMENT
                            </Link>
                        </li> */}
                        
                        {/* just added tempapry */}
                        <li className= "nav-item">
                            <Link to= '/admin' className ="nav-links" onClick={AdminPage}>
                                Admin
                            </Link>
                        </li>

                    </ul>
                    { button  && <Button buttonStyle= "btn--outline"> SIGN UP </Button>}
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;
