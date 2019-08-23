import React from 'react';
import {FormControl, Grid, Row, Col, Glyphicon, Form, FormGroup, ControlLabel, 
    Button, Checkbox , Image} from 'react-bootstrap';
import classes from './Login.css'

const Login =()=>{
    return (
        <div >
            <Grid className={classes.all}>
                <Row >
                    <Col xs={2} md={1}></Col>
                    <Col xs={14} md={10} className={classes.column}>
                        <Col xs={12} md={8} >
                        </Col>
                        <Col xs={6} md={4} className={classes.col} >
                        <br/>
                            <h1 style={{color : '#013042'}}>SIGN IN</h1>
                            <div className={classes.form}>
                                <Image src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" className={classes.image} circle />
                                <p></p>   
                                <Form horizontal >
                                    <FormGroup >
                                        <Col sm={12}>
                                            <FormControl type="email" placeholder="EMAIL"  />
                                        </Col>
                                    </FormGroup>
                                    <br />

                                    <FormGroup >
                                        <Col sm={12}>
                                            <FormControl type="password" placeholder="PASSWORD"/>
                                        </Col>
                                        
                                    </FormGroup>
                                    <Button bsSize="medium" style={{background : '#51B74B', color: 'white'}}>Let's Go</Button>
                                    <br />
                                    <p></p>
                                </Form>            
                                                                        
                            </div>
                        </Col>

                    </Col>
                    
                    <Col xs={2} md={1}></Col>
                </Row>
            </Grid>
            
        </div>
    )
}
export default Login;