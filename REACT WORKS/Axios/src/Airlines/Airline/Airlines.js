import React, {Component} from 'react';
import {Table, Button} from 'react-bootstrap';
import classes from './Airlines.css';
import axios from '../../SaveFirebase';

class Airlines extends Component{
    state={
        airlines: []
    }

    componentDidMount(){
        this.getAirlinesRecord();
    }
    getAirlinesRecord(){
        axios.get('/Airlines.json').then((response)=>{
            let resp = response.data;
            let allRecords = []
            for(let item in resp){
                allRecords.push(resp[item]);
                this.setState({airlines : allRecords})
            }
        })
    };

   

    render(){
        return(
            <div>
                <h3>AIRLINE RECORDS</h3>
                <br/>
                <Table>
                    <thead>
                        <tr>
                            <th className={classes.center}>Airline Name</th>
                            <th className={classes.center}>Airline Country</th>
                            <th className={classes.center}>Airline Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.airlines.map((item, key)=>{
                                return(
                                    <tr key={key}>
                                        <td>{item.airlineName}</td>
                                        <td>{item.airlineType}</td>
                                        <td>{item.airlineCountry}</td>
                                        <td>
                                            <Button type="submit" bsStyle="danger" >DELETE</Button>
                                        </td>
                                        <td>
                                            <Button type="primary" bsStyle="primary" >EDIT</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                       
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Airlines;