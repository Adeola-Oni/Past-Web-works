import React, {Component} from 'react';
import {Form, FormControl, FormGroup, Col, ControlLabel, Button} from 'react-bootstrap';
import axios from '../../SaveFirebase';

class Airline extends Component{
    state={
        airlineName: null,
        airlineType: null,
        airlineCountry: null
    }

    addNewAirline(e){
        if(this.state.airlineName === null || this.state.airlineType === null || 
            this.state.airlineCountry === null){

        }
        else{
            const airlineDetails = {
                airlineName: this.state.airlineName,
                airlineType: this.state.airlineType,
                airlineCountry: this.state.airlineCountry,

            }
            axios.post('/Airlines.json', airlineDetails).then(resp=>console.log(resp)).catch(err=>console.log(err))
        }
        e.preventDefault();
    }

    airlineName(e){
        this.setState({airlineName: e.target.value})
    }

    airlineType(e){
        this.setState({airlineType: e.target.value})
    }

    airlineCountry(e){
        this.setState({airlineCountry: e.target.value})
    }

    airline
    render(){

        return (
        <div>
            <h3>CREATE AIRLINE RECORD</h3>
            <br/>
             <Form horizontal>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        Airline Name
                    </Col>
                    <Col sm={8}>
                        <FormControl placeholder="Airline Name" onChange={(e)=>this.airlineName(e)}/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        Local/International
                    </Col>
                    <Col sm={8}>

                    <FormControl componentClass="select" placeholder="select" onChange={(e)=>this.airlineType(e)}>
                        <option value="select">select</option>
                        <option value="other">International</option>
                    </FormControl>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        Airline Country
                    </Col>
                    <Col sm={8}>
                        <FormControl placeholder="Airline Country" onChange={(e)=>this.airlineCountry(e)}/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={3} sm={8}>
                    <Button type="submit"  bsStyle="success" onClick={(e)=>this.addNewAirline(e)}>ADD NEW</Button>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={3} sm={8}>
                    <Button type="submit" bsStyle="primary"  href='/airlinesRecord'>AIRLINE RECORDS</Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
        )
    }
}

export default Airline;