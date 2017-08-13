import React from 'react'
import { Footer, Header, Homepage } from './../containers'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

const App = () => (
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={Homepage}/>
            <Route path="/*" component={Homepage}/>
            <Footer />
        </div>
    </Router>
);

export default App;
