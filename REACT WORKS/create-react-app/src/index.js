import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, Switch} from 'react-router';


ReactDOM.render(
    <Router>
        <Switch>
            <Route path='/' component/>
        </Switch>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
