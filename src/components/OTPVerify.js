import { Container, FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import React, { Component, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { createSocket } from '../Socket';

function OTPVerify(props) {       
    const [input, setInput] = useState("")
    const navigate = useNavigate();
  function handleChange(e) {
    setInput(e.target.value );
    console.log("Handle Change",e.target.value)
  }

  function handleClick  (e) {
    e.preventDefault();
    console.log(input)
    console.log(e.target)
    axios.get(`http://localhost:4000/OTPVerify?otp=${input}`)
    .then((result)=>{
      console.log(result)
      localStorage.setItem("email", result.data.email)
      localStorage.setItem("name", result.data.name)
      createSocket(result.data.email, () => {
        navigate('/chat')
      });
    })
    .catch((err)=>{
      console.log(err)
    })
  } 

  
    return (
      <Container className='mt-5' style={{width: "50%"}}>
          
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label  >Enter OTP</Form.Label>
          <Form.Control type="email"
                        placeholder="Enter your OTP" 
                        value={input}
                        onChange={(e)=> { console.log('Changed'); handleChange(e)} }
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e)=>handleClick(e)}>
          Join
        </Button> 
      </Form>
      </Container>
    );
}


export default OTPVerify