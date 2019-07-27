import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common['Authorization'] = "Auth token"; // this is for every request
axios.defaults.headers.post['Content-Type'] = "application/json"; // this is specific to post
axios.interceptors.request.use(requestConfig => {
    //we can modify the anything like headers etc here
    return requestConfig;
}, error => {
    return Promise.reject(error);
});
axios.interceptors.response.use(responseConfig => {
    //we can modify the anything like headers etc here
    return responseConfig;
}, error => {
    return Promise.reject(error);
});


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
