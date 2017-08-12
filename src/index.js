import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/Common.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {Item, Channel} from './components'
import Homepage from "./containers/Homepage";

ReactDOM.render(<Homepage />, document.getElementById('root'));
registerServiceWorker();
