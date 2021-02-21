import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

class Header extends Component{
    constructor(props) {
        super(props)
        this.state = {myValue: "value"}
    }

    render = () => {
        return(
            <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>
            </Navbar>
        );
    }
}

export default Header;