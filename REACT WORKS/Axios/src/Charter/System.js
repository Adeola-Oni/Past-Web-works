import React,{Component} from 'react';
import Navbar from '../Charter/Navbar';
 import classes from './Charter.css';
import Body from './Body'

class System extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Body/>
            </div>
        )
    }
}

export default System;