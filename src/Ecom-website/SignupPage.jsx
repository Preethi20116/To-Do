import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const SignupPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async() => {
    try {
      await createUserWithEmailAndPassword(auth,email,password);
      console.log("user successfully created");
      navigate('/dashboard');
    }
    catch(error){
      console.log("user not created");
    }
  }

  return (
    <Container>
      <Row className="justify-content-md-center mt-5" >
        <Col md={6} className="form-container">
          <h2 className="text-center mb-4"  >Signup Page</h2>
          <Form>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <br/>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <br/>
            <Form.Group>
              <Form.Label>new Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <br/>

            <Button onClick={handleSignup} variant="success" type="submit">
              Signup
            </Button>
          </Form>
          <p className="mt-3">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default SignupPage;
