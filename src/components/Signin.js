import { Container, FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';
import  {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OTPVerify from './OTPVerify';
import { Scrollbars } from 'react-custom-scrollbars-2';
function LogIn(props) {
  const [input, setInput] = useState("")
  const [errorVal, setError] = useState(0)
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInput(e.target.value);
    console.log("Handle Change",e.target.value)
    console.log("errorVal ",errorVal)
  }
  
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    axios.get(`http://localhost:4000/login?mail=${input}`)
    .then((result)=>{
      if(result){
        console.log(result)
        console.log("Mail added to LocalStorage")
        navigate('/OTPVerify')   
      }
      
    })
    .catch((err)=>{
      console.log(err)
      setError(1)
      console.log(errorVal)
    })
    
  } 

    return (
    <>  

      <Container className='mt-5' style={{width: "50%"}}>
          
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label  >Email ID</Form.Label>
          <Form.Control type="email"
                        placeholder="Enter your Email ID" 
                        value={input}
                        onChange={(e)=> { console.log('Changed'); handleChange(e)} }
          />
        </Form.Group>
 
        <Button variant="primary" type="submit" onClick={ (e)=> handleClick(e) }>
          Get OTP 
        </Button> 
      </Form>
      <div style={{  marginTop: "5px", textAlign:"center" }}>
      <Link to = {'/form'}> 
      Sign up for new account
          </Link>
          

      </div>
      <div>
      { 
      
      ( !{errorVal} ) ? (
        <h1> You have not registed in the users table </h1>
      ) : (
        null
      )
      } 
      </div>
    
      </Container>
    </>
    );
  
}
export default LogIn
