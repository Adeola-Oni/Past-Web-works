import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import { Router } from 'react-router-dom';
import {Route, Switch, Router } from 'react-router';
import HomeComponent from './Pages/Home/index';
import AboutComponent from './Pages/About/index';
import NotFound from './Pages/NotFound/index'
import ToDo from './ToDoApp/index'

import { createBrowserHistory } from 'history';

let history = createBrowserHistory();
ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route exact path='/' component={HomeComponent} />
            <Route path='/home' component={HomeComponent} />
            <Route path='/about' component={AboutComponent} />
            <Route path='/todo' component={ToDo} />
           <Route path='**' component={NotFound} />  
        </Switch>    
    </Router>,
    
    document.getElementById('root'));
registerServiceWorker();
