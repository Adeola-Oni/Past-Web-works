import React, {Component} from 'react';
import {Table, Button, FormControl, Modal, ModalHeader, ModalBody, ModalFooter, Form, 
    FormGroup, Col, ControlLabel, Glyphicon} from 'react-bootstrap';
import axios from '../../SaveFirebase';
import classes from './Records.css'
import Spinner from '../../Spinner/Spinner'

class flightRecords extends Component{
    state= {
        records : [],
        postLinks: [],
        status: null,
        flightDate:null,
        departureAirport: null,
        destinationAirport: null,
        flightNumber: null,
        noOfPassengers: [],
        show: false,
        currentIndex:null,
        statusOfTheModal: null,
        disable: false
    }

    componentDidMount(){
        this.fetchFlight();
        this.setState({status: null})
    }


    fetchFlight = () =>{
        let records_ = [];
        axios.get('/FlightRecords.json').then((response)=>{
            let res = response.data;
            this.setState({status : response.status})
            let post = []
            for(let item in res){
                post.push(item);
                records_.push(res[item]);
            }
            this.setState({postLinks : post});
            this.setState({records: records_});
            }
         );   
    }

    deleteHandler(index){
        let records_ = [...this.state.records]
        let link = this.state.postLinks;
        for(let x of records_){
            let item = this.state.records[index];
            if(item === x){
                records_.splice(item,1);
                this.setState({records: records_})
                this.setState({postLinks : link})
            }  
        }
        axios.delete('/FlightRecords/' + link[index] +'.json');
    }

    editHandler(e, index){
        this.setState({show : true});
        let records = this.state.records;

        let date = records[index].flightDate;
        let number = records[index].flightNumber;
        let departure = records[index].departureAirport;
        let destination = records[index].destinationAirport;
        let passengers = records[index].noOfPassengers;

        this.setState({flightDate : date});
        this.setState({flightNumber : number});
        this.setState({departureAirport : departure});
        this.setState({destinationAirport : destination});
        this.setState({noOfPassengers : passengers});
        this.setState({currentIndex : index})
    }

    closeModal(){
        this.setState({show : false})
    }

    changeDestinationAirport(e){
        this.setState({destinationAirport : e.target.value})
    }
    changeFlightDate(e){
        this.setState({flightDate : e.target.value})
    }
    changeFlightNumber(e){
        this.setState({flightNumber : e.target.value})
    }
    changeNoOfPassengers(e, index){
        this.setState({noOfPassengers : e.target.value})
    }

    changeDepartureAirport(e){
        this.setState({departureAirport : e.target.value})
    }

    saveChanges(e){
        this.setState({disable : true})
        let index = this.state.currentIndex;
        let link = this.state.postLinks;

        const FlightDetails = {
            flightDate: this.state.flightDate,
            flightNumber: this.state.flightNumber,
            departureAirport: this.state.departureAirport,
            destinationAirport: this.state.destinationAirport,
            noOfPassengers: this.state.noOfPassengers,
        }

        axios.delete('/FlightRecords/' + link[index] +'.json').then((resp)=>{
            
            axios.post('/FlightRecords.json', FlightDetails)
            .then((res) =>{
                this.fetchFlight();
                this.setState({show: false})
                this.setState({disable : false})
            })
        });
        
        e.preventDefault();
        
    }

    render(){
        let {records} = this.state;
        
        return(
            <div>
                <h3>FLIGHT RECORDS</h3>
                <br/>
                <Table>
                    <thead>
                        <tr>
                            <th>Flight Date(Y-M-D)</th>
                            <th>Flight Number</th>
                            <th>Departure Airport</th>
                            <th>Destination Airport</th>
                            <th>No Of Passengers</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { records.map((item, index) => {
                                    return (
                                    <tr key={index}>
                                        <td>{item.flightDate}</td>
                                        <td>{item.flightNumber}</td>
                                        <td>{item.departureAirport}</td>
                                        <td>{item.destinationAirport}</td>
                                        <td>{item.noOfPassengers}</td>
                                        <td>
                                            <Button type="submit" bsStyle="danger" onClick={()=>this.deleteHandler(index)}>DELETE</Button>
                                        </td>  
                                        <td>
                                            <Button type="submit" bsStyle="primary" onClick={(e)=>this.editHandler(e,index)}>EDIT</Button>
                                        </td>     
                                    </tr>)
                                } )
                        }
                        
                    </tbody>
                </Table>
                {   (this.state.status === null) ? <Spinner/>: null}
                <div>
                    <Modal show={this.state.show}>
                        <Modal.Footer>
                            <Glyphicon glyph="remove" style={{color: 'red'}} onClick={()=>this.closeModal()} />
                        </Modal.Footer>
                        <ModalBody>
                            <Form>
                                <FormGroup controlId="formHorizontalPassword">
                                    <Col componentClass={ControlLabel} sm={5}>
                                    FLIGHT DATE
                                    </Col>
                                    <Col sm={7}>
                                    <FormControl type="date" readOnly={false} className={classes.editable}
                                        onChange={(e)=>this.changeFlightDate(e)} value={this.state.flightDate} 
                                            />
                                    </Col>
                                </FormGroup>
                                <br />

                                <FormGroup controlId="formHorizontalPassword">
                                    <Col componentClass={ControlLabel} sm={5}>
                                    FLIGHT NUMBER
                                    </Col>
                                    <Col sm={7}>
                                    <FormControl type="number" readOnly={false} className={classes.editable}
                                        onChange={(e)=>this.changeFlightNumber(e)} value={this.state.flightNumber}/>
                                    </Col>
                                </FormGroup>
                                <br />

                                <FormGroup controlId="formHorizontalPassword">
                                    <Col componentClass={ControlLabel} sm={5}>
                                    DEPARTURE AIRPORT
                                    </Col>
                                    <Col sm={7}>
                                    <FormControl type="text"  readOnly={false} className={classes.editable}
                                        onChange={(e)=>this.changeDepartureAirport(e)} value={this.state.departureAirport}/>
                                    </Col>
                                </FormGroup>
                                <br />

                                <FormGroup controlId="formHorizontalPassword">
                                    <Col componentClass={ControlLabel} sm={5}>
                                    DESTINATION AIRPORT
                                    </Col>
                                    <Col sm={7}>
                                    <FormControl type="text"  readOnly={false} className={classes.editable}
                                        onChange={(e)=>this.changeDestinationAirport(e)} value={this.state.destinationAirport}/>
                                    </Col>
                                </FormGroup>
                                <br />

                                <FormGroup controlId="formHorizontalPassword">
                                    <Col componentClass={ControlLabel} sm={5}>
                                    NO OF PASSSENGERS
                                    </Col>
                                    <Col sm={7}>
                                    <FormControl type="number"  readOnly={false} className={classes.editable}
                                        onChange={(e)=>this.changeNoOfPassengers(e)} value={this.state.noOfPassengers}/>
                                    </Col>
                                </FormGroup> 
                                <br />     
                                    
                            </Form>

                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" bsStyle="success" disabled={this.state.disable} onClick={(e)=>this.saveChanges(e)} >SAVE CHANGES</Button>
                            <Button type="submit" bsStyle="primary" onClick={()=>this.closeModal()} >CANCEL</Button>
                        </ModalFooter>
                        
                    </Modal>
                </div>
            </div>
        )
    }
}

export default flightRecords;