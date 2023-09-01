// import { Container, FormGroup } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faCircle } from '@fortawesome/free-solid-svg-icons';
 import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
 import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
 import { faComments } from '@fortawesome/free-solid-svg-icons';
 import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
 import ListGroup from 'react-bootstrap/ListGroup';
 import Image from 'react-bootstrap/Image';
 import axios from 'axios';
 import { connect } from "react-redux"
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignRight, faBars, faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons'
import React, { Component, useState } from 'react'
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  Link } from 'react-router-dom';
import ChatList from './ChatList';
import Message from './Message';
import ChatRequest from './ChatRequest';
import { socket } from '../Socket'

function Chat( props ) {
  const [selectedContact, setselectedContact] = useState("")
   const [input, setInput] = useState("")
  const navigate = useNavigate();
  // function handleChange (e) {
  //   setInput(e.target.value);
  //   console.log("Handle Change",e.target.value)
  // }

  const ChatRequestsNav = () => {
    navigate('/requests')
  }
  useEffect(() => {
    console.log("useeffect ------->",props)
  },[])

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(this.state)
    console.log(e.target)
    axios.post(`http://localhost:4000/requestChat`, {
      mail: input,
      reqFromMail: localStorage.getItem("email"),
      reqFrom: localStorage.getItem("name")
    })
    .then((result)=>{
      if(result){
        console.log("axios result ----> ", result)
           
      }
      
    })
    .catch((err)=>{
      console.log(err)
    })
    setInput("")
  } 
  const exitChat= (props) => {
    localStorage.removeItem("selectedContact");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("selectedSendToMail");
    props.currentcontact = null;
    console.log("current contact   -------------> ", props.currentcontact)
    socket.disconnect();
    navigate('/login')
  }

  const setContact = (contact) => {
    console.log(contact)
    setselectedContact(contact)
  }
    return (
      <> 
      <div style={{
            height: "82%",
            textAlign: "center",
            marginBottom: "9%"
        }}
    >
    <Container className='mt-5' style={{width: "50%"}}>  

      <Row>
        <Col sm={4}>
          
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>  
    <Container>

      {/* Header */}
      <Row style={{background: "lightgray", border: 'solid 1px black'}}>
      <Col sm={4} style={{display: 'flex'}}>
        <div className="m-1">
        <div className="d-flex justify-content-start" style={{display: "flex"}}>
                <div>
                  <Image src="https://avatars.githubusercontent.com/u/94521881?v=4" style={{height:"49px", width:"49px", }} roundedCircle />
                </div>
                <div>
                  hi {localStorage.getItem('name')}
                </div>
                <div>
                  <Button onClick={ChatRequestsNav}>Chat Requests</Button>
                </div>
              <div style={{paddingLeft: '20px', display:"flex", gap:"30%"}}>    
                <div>
                  <FontAwesomeIcon className="mr-5" size='fa-6x' icon={faPeopleGroup}  />
                </div>
                <div>
                  <Link to = {'/status'}>
                    <FontAwesomeIcon className="mr-5" size='fa-6x' icon={faCircleNotch} />
                  </Link>  
                </div>
                <div>
                  <FontAwesomeIcon className="mr-5" size='fa-6x' icon={faComments}  />
                </div>
                <div>
                  <FontAwesomeIcon className="mr-5" size='fa-6x' icon={faEllipsisVertical} />
                </div>
                </div>  
        </div>
        </div>
      </Col>  
      <Col sm={5}>
      <div className="m-1 d-flex">  
              <div className=" justify-content-start">
                <span>
                  <Image src="https://avatars.githubusercontent.com/u/94521881?v=4" style={{height:"49px", width:"49px" }} roundedCircle />
                </span>
              </div>          
              <div>
                    <div>
                      <h5>
                      
                      </h5>
                    </div>
                    <div>
                      {props.currentcontact}
                      {/* redux mail incoming   */}
                    </div>
              </div>
              <div>
                <Button onClick={exitChat}>Exit Chat</Button>
              </div>
      
      </div>  
      </Col>
      <Col sm={1} style={{display: 'flex'}}>
      <div  style={{paddingLeft: '200px' }}>
          <FontAwesomeIcon icon={faSearch} style={{marginTop: "15px"}} />
      </div>    
        {/* </Col>      
        <Col sm={1} style={{display: 'flex'}}> */}
        
        <div  style={{paddingLeft: '60px'}}>
        <FontAwesomeIcon icon={faBars} style={{marginTop: "15px" }} />
        </div>
        </Col>
      </Row>

      {/* Chats and Chat Numbers */}
      <Row style={{border: 'solid 1px black'}}>
        <Col sm={4}>
          <InputGroup size="sm" className="mb-3" style={{marginTop: "15px"}} >
            <InputGroup.Text id="inputGroup-sizing-sm">
            {/* <FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} /> */}
            <FontAwesomeIcon icon={faSearch} />
            </InputGroup.Text>
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>

         

          <ChatList setContact = {setContact} />
        </Col>
        <Col sm={8}>
          
          <Row style={{border: "solid 2px green"}}>
            <Message contact = {selectedContact} socket={props.socket}/>
          </Row>
        </Col>
      </Row>

    </Container>


    {/* <Container className='mt-5' style={{width: "50%"}}>
          
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label  >Email ID</Form.Label>
              <Form.Control type="email"
                            placeholder="Enter Email ID" 
                            value={input}
                            onChange={(e)=> { console.log('Changed'); handleChange(e)} }
              />
            </Form.Group>
     
            <Button variant="primary" type="submit" onClick={ (e)=>handleClick(e) }>
            
              Send Request 
              
            </Button> 
          </Form>
    </Container> */}
    </div>
    </>
  )
}

const mapStateToProps = (state) => {
  console.log('state -> ', state);
  return {
    currentcontact: state.contact.currentcontact,
  }
}

export default connect(mapStateToProps, null)(Chat)