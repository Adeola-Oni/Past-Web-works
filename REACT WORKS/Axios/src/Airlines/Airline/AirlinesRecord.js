import React from 'react';
import Navbar from '../FlightRecords/Navbar'
import Airlines from './Airlines'
import classes from './AirlinesRecord.css'

const airlines= ()=>{
    return (
        <div >
            <div>
                <Navbar />
            </div>
            <div>
                <Airlines/>
            </div>
        </div>
    )
}

    


export default airlines