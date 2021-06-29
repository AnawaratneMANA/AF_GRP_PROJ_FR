// import React from "react";
// import AdminPage from "../AdminPage";
// import { getByTestId, render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { MemoryRouter } from 'react-router-dom';
// import {applyMiddleware, createStore} from "redux";
// import reducers from "../../../../reducers";
// import {composeWithDevTools} from "redux-devtools-extension";
// import thunk from "redux-thunk";
// const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
//
// let container = null;
//
// describe('Testing Admin page UI', () => {
//     beforeEach(() => {
//         container = render(
//             <MemoryRouter>
//                 <Provider store={store}>
//                     <AdminPage/>
//                 </Provider>
//             </MemoryRouter>
//             ).container;
//     });
//
//     it('should render admin-interface', () => {
//         expect(getByTestId(container, 'admin-interface')).toBeTruthy();
//     });
//     it('should render admin-container', () => {
//         expect(getByTestId(container, 'admin-container')).toBeTruthy();
//     });
//     it('should render admin-row1', () => {
//         expect(getByTestId(container, 'admin-row1')).toBeTruthy();
//     });
//     it('should render admin-heading', () => {
//         expect(getByTestId(container, 'admin-heading')).toBeTruthy();
//         expect(getByTestId(container, 'admin-heading').textContent).toBe(' Monitoring Section ');
//     });
//     it('should render admin-row2', () => {
//         expect(getByTestId(container, 'admin-row2')).toBeTruthy();
//     });
//     it('should render admin-row3', () => {
//         expect(getByTestId(container, 'admin-row3')).toBeTruthy();
//     });
//     it('should render admin-row4', () => {
//         expect(getByTestId(container, 'admin-row4')).toBeTruthy();
//     });
//     it('should render admin-row5', () => {
//         expect(getByTestId(container, 'admin-row5')).toBeTruthy();
//     });
//     it('should render admin-row6', () => {
//         expect(getByTestId(container, 'admin-row6')).toBeTruthy();
//     });
// });