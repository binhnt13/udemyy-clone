import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/Common.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {Item} from './components'

ReactDOM.render(<Item />, document.getElementById('root'));
registerServiceWorker();
