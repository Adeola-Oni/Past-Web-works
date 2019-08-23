import React from 'react';
import classes from './Navbar.css';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

const navbar = (props)=>(
    <div >
        <Navbar bsStyle="inverse">
            <Navbar.Header>
                <Navbar.Brand>
                <b style={{color: 'white'}}>AIRLINES.NG</b>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav bsStyle="pills" pullRight>
                <NavItem href='/flight' >
                    <p className={classes.navitem} >FLIGHT RECORDS</p>
                </NavItem>
                <NavItem href='/airline' >
                    <p className={classes.navitem} >AIRLINE RECORDS</p>
                </NavItem>
                <NavItem >
                    <p className={classes.navitem} > REPORTS</p>
                </NavItem>
            </Nav>
        </Navbar>
       
    </div>
);

export default navbar;