import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/Common.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {Item, Channel, FeatureInstruction} from './components'
import {Homepage, Footer} from "./containers";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
