import React, {Component} from 'react';
import classes from './Records.css';
import Navbar from '../FlightRecords/Navbar';
import FlightRecords from './FlightRecords'


class Flight extends Component{
    render(){
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                 <div className ={classes.records}>
                    <FlightRecords />
                </div>
            </div>
           
            
        )
    }
}

export default Flight;