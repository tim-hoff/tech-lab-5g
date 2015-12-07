//react
import React from 'react';
import ReactDOM from 'react-dom';
import ReactMessage from './components/Message';

ReactDOM.render(
    <ReactMessage phrase="React Component!"/>,
    document.querySelector('#app')
);


//es6
import {es6Welcome} from './demoES6';
es6Welcome(6);


//es5
var es5Welcome = require('./demoES5');
es5Welcome(5);


// https://github.com/ModuleLoader/es6-module-loader/wiki/Brief-Overview-of-ES6-Module-syntax
console.log('javascript reporting in from index.js ...');




