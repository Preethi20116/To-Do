import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth/cordova';
import { auth } from '../firebaseConfig';


const LoginPage = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async() => {
    try{
      await signInWithEmailAndPassword(auth, email, password);
      console.log("use logged in successfully");
      navigate('/dashboard');
    }
    catch(error){
    console.log(error);
    }
  }

  return (
    <Container className='text-dark'>
      <Row className="justify-content-md-center mt-5">
        <Col md={6} className="form-container">
          <h2 className="text-center mb-4" >Login Page</h2>
          <Form>
            <Form.Group>
              <Form.Label >Email </Form.Label>
              <Form.Control type="email" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>
            <br/>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <br/>
            <Button onClick={handleSubmit} variant="success" type="submit">
              Login
            </Button>
          </Form>
          <p className="mt-3">
            Don't have an account? <Link to="/signup">Sign up here</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
