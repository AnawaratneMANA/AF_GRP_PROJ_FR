import React from 'react';
import {render} from 'react-dom';
import App from "./app";
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css'
import { createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

//It will only show the App_with_a_class_component component.
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app'));
