import React from 'react';
import './style.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/login'>
                                <a className="nav-link active" aria-current="page"
                                   href="/register"
                                >Login</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/register'>
                                <a className="nav-link" href="/posts">Register</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/DisplayStudent">Display Student</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;
