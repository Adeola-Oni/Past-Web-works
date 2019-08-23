import React,{Component} from 'react';
import classes from './Flight.css';
import {Form, FormControl, FormGroup, Col, ControlLabel, Button} from 'react-bootstrap';
import axios from '../../SaveFirebase.js'

class Flight extends Component{
    state={
        flightDate: null,
        flightNumber: null,
        departureAirport: null,
        destinationAirport : null,
        noOfPassengers: null,
        disable: false,
        success: false
    }
    componentDidMount(){
        
    }
    addNewHandler(e){
        this.setState({disable : true})
        if (this.state.flightDate===null || this.state.flightNumber===null || 
            this.state.departureAirport===null || this.state.destinationAirport===null || 
            this.state.noOfPassengers===null){
                console.log("one")
            }
            else{
                const FlightDetails = {
                    flightDate: this.state.flightDate,
                    flightNumber: this.state.flightNumber,
                    departureAirport: this.state.departureAirport,
                    destinationAirport: this.state.destinationAirport,
                    noOfPassengers: this.state.noOfPassengers,
                }

                axios.post('/FlightRecords.json', FlightDetails).then((resp)=>{
                    this.clearInputs()
                    this.setState({disable : false})
                    this.setState({success : true})
                });   
            }
        e.preventDefault();
        
    }

    clearInputs(){
        document.getElementById('date').value = '';
        document.getElementById('number').value = '';
        document.getElementById('departure').value = '';
        document.getElementById('destination').value = '';
        document.getElementById('passengers').value = '';
    }
    

    changeFlightDate(e){
        this.setState({
            flightDate : e.target.value
        })
    }
    changeFlightNumber(e){
        this.setState({
            flightNumber : e.target.value
        })
    }
    changeDepartureAirport(e){
        this.setState({
            departureAirport : e.target.value
        })
    }
    changeDestinationAirport(e){
        this.setState({
            destinationAirport : e.target.value
        })
    }
    changeNoOfPassengers(e){
        this.setState({
            noOfPassengers : e.target.value
        })
    }


    render(){
        let ima = <div className={classes.isa_success}>
                    <i class="fa fa-check"></i>
                    <p>SUCCESSFUL</p>
                </div> 
        return (
            <div>
                <h3>CREATE FLIGHT RECORD</h3>
                <br/>
                {(this.state.success === true)? ima : null}
                <Form horizontal>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={3}>
                            Flight Date
                        </Col>
                        <Col sm={8}>
                            <FormControl id='date' type='date' placeholder="Flight Date" onChange={(e)=>this.changeFlightDate(e)}/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={3}>
                            Flight Number
                        </Col>
                        <Col sm={8}>
                            <FormControl id='number' type='number' placeholder="Flight Number" onChange={(e)=>this.changeFlightNumber(e)}/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={3}>
                            Departure Airport
                        </Col>
                        <Col sm={8}>
                            <FormControl id='departure' type='text' placeholder="Departure Airport" onChange={(e)=>this.changeDepartureAirport(e)}/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={3}>
                            Destination Airport
                        </Col>
                        <Col sm={8}>
                            <FormControl id='destination' type='text' placeholder="Destination Airport" onChange={(e)=>this.changeDestinationAirport(e)}/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={3}>
                            No Of Passengers
                        </Col>
                        <Col sm={8}>
                            <FormControl id='passengers' type='number' placeholder="No Of Passengers" onChange={(e)=>this.changeNoOfPassengers(e)}/>
                        </Col>
                    </FormGroup>

                    <br /> 
                    <FormGroup>
                        <Col smOffset={3} sm={8}>
                        <Button type="submit"  bsStyle="success" disabled={this.state.disable} onClick={(e)=>this.addNewHandler(e)}>ADD NEW</Button>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={3} sm={8}>
                        <Button type="submit" bsStyle="primary"  href='/flightrecords'>FLIGHT RECORDS</Button>
                        </Col>
                    </FormGroup>
                    
                </Form>
            </div>
        )
    }
}
export default Flight;