import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import './css/MainNavBar.css'



class MainNavBar extends React.Component {
    render() {
        return(
            <Navbar expand="lg" fixed="top" variant="dark">
                <Navbar.Brand href="#home">
                    <img 
                    src="./images/small_logo.png"
                    width="auto"
                    height="30"
                    alt="coveree_logo"
                     />
                    Coveree
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                       <Nav.Link href="#about">A propos</Nav.Link>
                    </Nav>
                    <Nav>
                       <Button className="mr-3" variant="outline-light">Connexion</Button>
                       <Button className="mr-3" variant="warning">Obtenir mon prix</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default MainNavBar