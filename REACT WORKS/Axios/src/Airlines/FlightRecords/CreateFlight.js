import React, {Component} from 'react';
import classes from './CreateFlight.css';
import FlightDetails from './Flight'
import Navbar from './Navbar';


class Flight extends Component{
    render(){
        return (
            <div>
                <div >
                    <Navbar />
                </div>
                 <div className ={classes.records}>
                    <FlightDetails />
                </div>
            </div>
           
            
        )
    }
}

export default Flight;