import React,{Component} from 'react';
import {Grid, Row, Col, Glyphicon, Table, Button, ButtonToolbar} from 'react-bootstrap';
// import Scrollspy from 'react-scrollspy';
import classes from './Body.css';

class Body extends Component{
    state={
        modal: false,
        
    }
    render(){
        return(
            <div className={classes.body}>
                <b><h4 className={classes.name}>CHARTER MANAGEMENT SYSTEM</h4></b>
                <br />
                <Grid>
                    <Row>
                        <Col xs={3} md={2}>IMAGES</Col>
                        <Col xs={12} md={8}>
                            <Col xs={6} md={4}>
                                <p>Charter/Jet Service</p>
                                <div className={classes.scroll}>
                                    <p><a>section 1</a></p>
                                    <p><a>section 2</a></p>
                                    <p><a>section 3</a></p>
                                    <p><a>section 4</a></p>
                                    <p><a>section 5</a></p>
                                    <p><a>section 6</a></p>
                                    <p><a>section 7</a></p>
                                    <p><a>section 8</a></p>
                                    <p><a>section 9</a></p>
                                    <p><a>section 10</a></p>
                                </div>
                            </Col>
                            <Col xs={6} md={4}>
                                <p>Start Date</p>
                                <input type='date' /> <Glyphicon glyph="calendar" />
                            </Col>
                            <Col xs={6} md={4}>
                                <p>End Date</p>
                                <input type='date' /> <Glyphicon glyph="calendar" />
                            </Col>
                        </Col>
                        <Col xs={3} md={2}></Col>
                    </Row>
                    <br/>
                    <br />
                    <Row>
                        <Col xs={3} md={2} ></Col>
                        <Col xs={4} md={3} className={classes.totalFlight}>
                            <div>
                                <h4>TOTAL FLIGHTS</h4>
                                <h4>4</h4>
                            </div>
                        </Col>
                        <Col xs={4} md={2} ></Col>
                        <Col xs={4} md={3} className={classes.totalFlownHours}>
                            <div>
                                <h4>TOTAL FLOWN HOURS</h4>
                                <h4>40</h4>
                            </div>
                        </Col>
                        <Col xs={3} md={2} ></Col>
                    </Row>
                    
                </Grid>
                <br />
                <br />

                <Table  striped bordered condensed hover>
                    <thead >
                        <tr >
                            <th style={{textAlign: 'center'}}>ARR TIME</th>
                            <th style={{textAlign: 'center'}}>FLIGHT ID</th>
                            <th style={{textAlign: 'center'}}>FLIGHT TIME</th>
                            <th style={{textAlign: 'center'}}>CHARTER</th>
                            <th style={{textAlign: 'center'}}>DEPARTURE</th>
                            <th style={{textAlign: 'center'}}>DESTINATION</th>
                            <th style={{textAlign: 'center'}}>PERMIT TYPE</th>
                            <th style={{textAlign: 'center'}}>FLOWN HOURS</th>
                            <th ></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>11:20pm</td>
                            <td>234</td>
                            <td>23/07/2018</td>
                            <td>Bristow</td>
                            <td>LAGOS</td>
                            <td>ABUJA</td>
                            <td>COMMERCIAL</td>
                            <td>5</td>
                            <td><Button bsSize="medium" bsStyle="primary">VIEW <Glyphicon glyph="eye-open" /></Button></td>
                        </tr>
                        <tr>
                            <td>11:20pm</td>
                            <td>234</td>
                            <td>23/07/2018</td>
                            <td>Bristow</td>
                            <td>LAGOS</td>
                            <td>ABUJA</td>
                            <td>COMMERCIAL</td>
                            <td>5</td>
                            <td><Button bsSize="medium" bsStyle="primary">VIEW <Glyphicon glyph="eye-open" /></Button></td>
                        </tr>
                        <tr>
                            <td>11:20pm</td>
                            <td>234</td>
                            <td>23/07/2018</td>
                            <td>Bristow</td>
                            <td>LAGOS</td>
                            <td>ABUJA</td>
                            <td>COMMERCIAL</td>
                            <td>5</td>
                            <td><Button bsSize="medium" bsStyle="primary">VIEW <Glyphicon glyph="eye-open" /></Button></td>
                        </tr>
                    </tbody>
                </Table>
                <footer>
                    <ButtonToolbar className={classes.but}>
                        <Button bsSize="medium" bsStyle="success">DOWNLOAD <Glyphicon glyph="download-alt" /></Button>
                        <Button bsSize="medium" bsStyle="primary">PRINT <Glyphicon glyph="print" /></Button>
                    </ButtonToolbar>
                </footer>
            </div>
        )
    }
}
export default Body;