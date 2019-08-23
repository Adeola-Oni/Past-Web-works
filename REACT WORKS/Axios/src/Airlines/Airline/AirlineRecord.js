import React, {Component} from 'react';
import classes from './AirlineRecord.css';
import Navbar from '../FlightRecords/Navbar';
import Airline from './Airline'

class Flight extends Component{
    render(){
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                 <div className ={classes.records}>
                    <Airline />
                </div>
            </div>
           
            
        )
    }
}

export default Flight;