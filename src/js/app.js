import ReactMessage from './components/Message';
import HueCard from './components/HueCard';

// es6
import {es6Welcome} from './demoES6';
// es6Welcome(6);

// es5
var es5Welcome = require('./demoES5');

// hueAlarm
var hueAPI = require('./hueAPI');
hueAPI(1);

// https://github.com/ModuleLoader/es6-module-loader/wiki/Brief-Overview-of-ES6-Module-syntax
console.log('javascript reporting in from index.js ...');




