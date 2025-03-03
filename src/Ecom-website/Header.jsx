// src/components/Header.js
import React from 'react';
import { Container, Navbar, Col, Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';


const Header = () => {
   return (
   
   <Navbar bg='light' expand="lg" className='px-2'>
      <Container fluid>
         <img src="image/greenlogo.png" alt="Logo" width={80} height={80} className="logo" />

         <Col xs={12} md={6}>
        <InputGroup className='justify-content-center'>
        <Form.Control placeholder="What are you looking for?" type="search"/>
        <Button variant="success">
        <img src="/images/searchicon.png" alt="Search" style={{ width: '16px', height: '16px' }} /> search
        </Button>
        </InputGroup></Col>

        <Stack direction="horizontal" gap={5}>
         <Link to="/support" className="text-success text-decoration-none align-items-center"> 
         <img src='/image/mailicon.png' variant="success" width="40" height="40"/> Support
         </Link>
   
         <Link to="/Login" className="text-success text-decoration-none align-items-center"> 
         <img src='/image/usericon.png' width="30" height="30"/>Login
         </Link>
   
         <Link to="/cart" className="text-success text-decoration-none align-items-center"> 
         <img src='/image/cart.jpeg' width="30" height="30" /> Cart
         </Link>
         </Stack>
         </Container>
      </Navbar>
      
);
};
export default Header;
