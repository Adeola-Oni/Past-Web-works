import React from 'react';
import {Nav, Navbar, NavDropdown, MenuItem, NavItem} from 'react-bootstrap';

const NavBar =(()=>{
    return(
        <div>
            <Navbar>
                <Nav pullRight>
                    <NavItem>
                        <NavDropdown title="Wecome Administrator" >
                            <MenuItem>Update Profile</MenuItem>
                            <MenuItem>Logout</MenuItem>
                        </NavDropdown>
                    </NavItem>
                    <NavItem>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>   
    )
})

export default NavBar;