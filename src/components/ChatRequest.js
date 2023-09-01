// coming from ChatList code of button, displayRequest.map, acceptedRequest, getChatRequests

import React, { Component, useState, createContext, useEffect} from 'react'
import axios from 'axios';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import { Button, Container, FormGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ChatRequest(){
    const [input, setInput] = useState("")


    function handleChange (e) {
        setInput(e.target.value);
        console.log("Handle Change",e.target.value)
    }

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

    const [displayMessage, setDisplayMessage] = useState([])
    const [displayRequest, setDisplayRequest] = useState([])
    const navigate = useNavigate();
    var today = new Date();
    var time = today.getHours() + ':' + today.getMinutes(); 
    useEffect(() => {
        getChatRequests()
    }, [])
    const ChattingPage = () => {
        navigate('/chat')
    }
    const acceptedRequest = (mail, contact) => {
        console.log("mail------>",mail)
        console.log("chat------>", contact)
        const acceptedMail = mail;
        const acceptedContact = contact;
        axios.post(`http://localhost:4000/acceptedChat`, {
          sendToMailID: acceptedMail,
          sendTo: acceptedContact,
          chatReceivedFromMailID: localStorage.getItem("email"),
          chatReceivedFrom: localStorage.getItem("name")
        })
        .then((result)=>{
          if(result){
            console.log("Accepted request contact details sent ----> ", result)
            // window.location.reload();
          }
          
        })
        .catch((err)=>{
          console.log(err)
        })
  
   }
   const rejectedRequest = (mail, contact) => {
    console.log(" rejected mail------>",mail)
        console.log(" rejected chat------>", contact)
        const rejectedMail = mail;
        const rejectedContact = contact;
        axios.post(`http://localhost:4000/rejectedChat`, {
          sendToMailID: rejectedMail,
          sendTo: rejectedContact,
          chatReceivedFromMailID: localStorage.getItem("email"),
          chatReceivedFrom: localStorage.getItem("name")
        })
        .then((result)=>{
          if(result){
            console.log("Accepted request contact details sent ----> ", result)
            // window.location.reload();
          }
          
        })
        .catch((err)=>{
          console.log(err)
        })

   }

    const getChatRequests = () => {
        const ownermail = localStorage.getItem("email") //changed due to error in requests table
        axios.get(`http://localhost:4000/requestChat?ownermail=${ownermail}`, {
        responseType: "json",
      })
      .then((result)=>{
        // console.log(result)
        const arr = [];
        console.log("req chat results  ----> ",result);
        // alert("getChatRequest printed on console")
        for(var i=0; i<result.data.reqList.length; i++){
          const newDisplayRequest = {
            contact: result.data.reqList[i].reqFrom,
            sendToMailID: result.data.reqList[i].reqFromMail,
            image: "https://avatars.githubusercontent.com/u/94521881?v=4",
            message:2,
            unread:3,
            currentDateTime:time,
            contactMail: result.data.reqList[i].reqFromMail,
          }
          console.log(result.data.reqList[i].reqFromMail)
          
          arr.push(newDisplayRequest)
          
        }
        setDisplayRequest(arr)
      })
      .catch((err)=>{
        console.log(err)
      })
      }
    

    return(
    <>
    <Container> 
      <Row>
        <Col style={{marginTop: "5%"}}>
            <h3>Send your Request to Chat</h3>
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

          <div style={{marginTop: "5%"}}>


        <Button onClick={ChattingPage}>Click here to Chat</Button>
        </div>
        </Col>
        <Col style={{marginTop: "5%"}}>
        </Col>
        <Col style={{marginTop: "5%"}} >
            <h3>Here are the Chat Requests</h3>
            <div style={{ marginTop: "10px" }}> 
            
            {
              (displayRequest.length) ? (
              <div>
                  {displayRequest.map((displayReq)=> {
                    console.log(displayRequest)
                        return (
                        <div style={{
                            // height: "82%",
                            textAlign: "center",
                            // marginBottom: "9%",
                            borderRight: 'solid 1px grey'
                        }} 
                        >
                            <div 
                            style={{ cursor: "pointer" }} 
                            >  
                            
                            <div  className="d-flex mb-1 flex-row" onClick={ () => {  } } >
                                {/* for profile picture */}
                            
                                <div className="d-flex justify-content-start">
                                    <span>
                                    <Image src={displayReq.image} style={{height:"75px", width:"75px", }} roundedCircle />
                                    </span>
                                </div>
                            
                                {/* for chat  */}
                                <div  className='flex-fill border-bottom border-dark click'>
                                {/* for name and time */}
                                <div className="d-flex justify-content-between align-items-start " >
                                    {/* for name  */}
                                    <div className='flex-fill' >
                                    <span>
                                        <h5>
                                        {displayReq.contact} wants to chat
                                        </h5>
                                    </span>
                                    </div >
                                    {/* for time */}
                                    <div className='flex-fill'>
                                    <span>
                                        <Badge bg="success" pill>
                                        {/* {displayContact.currentDateTime} */}
                                        </Badge>
                                    </span>
                                    </div>
                                </div>
                                {/* for message and unread */}
                                <div className="d-flex justify-content-between align-items-start flex-fill " >
                                    {/* for message  */}
                                    <div className='flex-fill'>
                                    <span>
                                        <button onClick={() => {acceptedRequest(displayReq.contactMail, displayReq.contact)}} >Accept</button>
                                    </span>
                                    </div>
                                    {/* for unread  */}
                                    <div className='flex-fill '>
                                    <span className='fa d-icon d-icon-chevron-down svg-icon svg-node'>    
                                    <button onClick={() => {rejectedRequest(displayReq.contactMail, displayReq.contact)}}>Reject</button>
                                    {
                                        // {enterKey} !== -1 && {enterKey} === index?<span> <Edit/> </span> : null
                                    }
                                    </span>
                                    </div>
                                </div>
                                </div>
                            
                            </div>
                            
                            </div>  
                        </div>
                    
                    )

                })}
              </div>
              ) 
              : 
              (
              <h4>
                You have no Chat Requests to display
              </h4>
              )
            }
            </div>
        </Col>
        
      </Row>
    </Container>
    </>
    )
}
export default ChatRequest;