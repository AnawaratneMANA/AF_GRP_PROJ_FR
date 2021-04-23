import React from 'react';
import {render} from 'react-dom';
import App from "./app";
import './index.css'
//It will only show the App_with_a_class_component component.
render(<h1> Hello to React Header</h1>, document.getElementById('app'));
render(<App/>, document.getElementById('app'));
