import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import {Router, Route , Switch} from 'react-router';
import Post from './containers/Blog/index'
import Space from './Space/index';
import CreateFlight from '../src/Airlines/FlightRecords/CreateFlight'
import AirlineRecords from '../src/Airlines/Airline/AirlineRecord.js';
import FlightRecords from '../src/Airlines/AllFlightRecords/Records';
import Airlines from '../../Axios/src/Airlines/Airline/AirlinesRecord'
import Charter from '../src/Charter/Charter';
import StaffLogin from '../src/Out/Staff/Login';
import StaffHomePage from '../src/Out/Staff/Home';
import Login from '../src/AiRFAAN/Login';
import {createBrowserHistory} from 'history';

let history = createBrowserHistory();

axios.interceptors.request.use(request => {
    console.log(request);
});

ReactDOM.render(
    <Router history={history}> 
        <Switch>
            <Route path='/posts' component={Post}/>
            <Route exact path='/' component={Post}/>
            <Route path='/space' component={Space}/>
            <Route path='/flight' component={CreateFlight} />
            <Route path='/airline' component={AirlineRecords} />
            <Route path='/flightrecords' component={FlightRecords}/>
            <Route path='/airlinesRecord' component={Airlines}/>
            <Route path='/charter' component={Charter}/>
            <Route path='/login' component={StaffLogin}/>
            <Route path='/staffhome' component={StaffHomePage}/>
            {/* <---FAAN WORK---> */}
            <Route path='/loginfaan' component={Login}/>

        </Switch>
    </Router>
, document.getElementById( 'root' ) );
registerServiceWorker();
