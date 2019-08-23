import classes from './Home.css'
import React, { Component } from 'react'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar, Container, Item, 
    Label, Card, Grid, Radio, List , Form, TextArea, Divider, Input} from 'semantic-ui-react';

import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap'
const picture =  <Image src='/images/wireframe/short-paragraph.png' />
            
class Home extends Component {
    state = { visible: false }
    handleButtonClick = () => this.setState({ visible: !this.state.visible })   
    handleSidebarHide = () => this.setState({ visible: false })
    render(){
        const { visible } = this.state
        return(
            <div className={classes.all}>
            

            <Sidebar.Pushable as={Segment}>
                
                <Sidebar as={Menu}  icon='labeled' inverted vertical visible width='wide' 
                style={{'background-color': "purple", 'font-size' : '1.5rem', color: 'black'}}>
                    <Menu.Item style={{'textAlign' : 'center', display : 'inline'}}>
                        <Image 
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9LrAs4VuF4ipgxna-fn_UmmfZ_Iu-RgClxGvrtLAmJzMfhR25MQ' 
                        size='small' circular style={{'textAlign' : 'center', display : 'inline', 'margin-top': '10%'}}/>
                    </Menu.Item>
                    <Menu.Item>
                        ADEBAYO MOSES
                    </Menu.Item>
                    <Menu.Item >
                        UI/UX
                    </Menu.Item>
                    <Menu.Item as='a'>
                        LEAVE STATUS
                    </Menu.Item>
                    <Menu.Item as='a'>
                        LEAVE RECORDS
                    </Menu.Item>
                    <Menu.Item as='a'>
                        PEOPLE OPS
                    </Menu.Item>
                    <Menu.Item as='a'>
                        COMPLAIN
                    </Menu.Item>
                </Sidebar>
                
                <Sidebar.Pusher dimmed={visible} >
                    <Segment basic>
                    <Container style={{'margin-left':'0px'}}>
                        <Grid style={{'font-size' : '1.5rem', textAlign : 'center'}}>
                            <Grid.Row style={{'padding-top': '2%'}}>
                                <Grid.Column width={2}>
                                    <h4 >LEAVE TYPE</h4>
                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <Container className={classes.container}>
                                        <FormGroup controlId="formControlsSelect">
                                            <ControlLabel>SELECT A LEAVE TYPE</ControlLabel>
                                            <FormControl componentClass="select" placeholder="select">
                                                <option value="ANNUAL">ANNUAL</option>
                                                <option value="CASUAL">CASUAL</option>
                                                <option value="COMPASSIONATE">COMPASSIONATE</option>
                                                <option value="EMERGENCY">EMERGENCY</option>
                                                <option value="MATERNITY">MATERNITY</option>
                                                <option value="MATERNITY">PATERNITY</option>
                                                <option value="SICK">SICK</option>
                                                <option value="STUDY">STUDY</option>
                                                <option value="LATE COMING">LATE COMING</option>
                                            </FormControl>
                                        </FormGroup>
                                    </Container>
                                </Grid.Column>
                                

                                <Grid.Column width={2} >
                                    <Segment style={{width:'70%' }}>
                                        <Label attached='top' color='red'>ANNUAL </Label>
                                        <p>10</p>
                                    </Segment>

                                    <Segment style={{width:'70%' }}>
                                        <Label attached='top' color='blue'>CASUAL </Label>
                                        <p>10</p>
                                    </Segment>

                                    <Segment style={{width:'70%' }}>
                                        <Label attached='top' color='purple'>COMPASSIONATE </Label>
                                        <p>10</p>
                                    </Segment>

                                </Grid.Column> 

                                <Grid.Column width={2} >
                                    <Segment style={{width:'70%' }}>
                                        <Label attached='top' color='yellow'>EMERGENCY </Label>
                                        <p>10</p>
                                    </Segment>

                                    <Segment style={{width:'70%' }}>
                                        <Label attached='top' color='pink'>MATERNITY </Label>
                                        <p>10</p>
                                    </Segment>

                                    <Segment style={{width:'70%' }}>
                                        <Label attached='top' color='black'>PATERNITY </Label>
                                        <p>10</p>
                                    </Segment>
                                                                
                                </Grid.Column> 

                                <Grid.Column width={2} >


                                    <Segment style={{width:'70%' }}>
                                        <Label attached='top' color='orange'>SICK </Label>
                                        <p>10</p>
                                    </Segment>

                                    <Segment style={{width:'70%' }}>
                                        <Label attached='top' color='teal'>STUDY </Label>
                                        <p>10</p>
                                    </Segment>

                                    <Segment style={{width:'70%' }}>
                                        <Label attached='top' color='brown'>LATE COMING </Label>
                                        <p>10</p>
                                    </Segment>
                                    
                                                                
                                </Grid.Column> 
                            </Grid.Row>

                            <Divider />

                            <Grid.Row>
                                <Grid.Column width={3} >
                                    <h4 >REASON(S) *</h4>
                                </Grid.Column>

                                <Grid.Column width={10}>
                                    <Form  style={{'font-size' : '1.5rem', textAlign : 'center'}}>
                                        <TextArea autoHeight placeholder='Please state reason(s) for the intended leave' />
                                    </Form>
                                </Grid.Column>
                            </Grid.Row>
                            
                            <Divider />

                            <Grid.Row>
                                <Grid.Column width={3} >
                                    <h4 >ATTACHMENT(S) *</h4>
                                </Grid.Column>

                                <Grid.Column width={10}>
                                    <Form  style={{'font-size' : '1.5rem', textAlign : 'center'}}>
                                        <Input type='file' tyfocus placeholder='Search...' />
                                    </Form>
                                </Grid.Column>
                            </Grid.Row>

                        </Grid>
                    </Container>
                    </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </div>
        )
    }
  }


export default Home;
