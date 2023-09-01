import React, { Component, useState, createContext, useEffect} from 'react'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {faMicrophone} from '@fortawesome/free-solid-svg-icons';
import {MDBInputGroup} from 'mdb-react-ui-kit';
import axios from 'axios';
import ChatList from './ChatList';
import { Name } from './ChatList';
import { connect } from "react-redux"
import { socket } from '../Socket';
import { useRef } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

function Message(props) {



  const [message, setMessage] = useState();
  const [displayMessages, setDisplayMessages] = useState([]) 
  const [displayIds, setDisplayIds] = useState([])
  const [styleOfFlex, setStyle] = useState()

  const handleClick = (e, props) => {
    e.preventDefault();
    console.log("send chat to -----------> ", props.currentcontact)
    console.log(e.target)
    // -------  Method 1. (Socket IO)
    // const chat = { 
    //   message : `random number is ${Math.floor(Math.random() * (100 - 1) + 1)}`,
    //   sendTo: props.currentmail,
    //   sendToName: props.currentcontact,
    //   chatFrom:  localStorage.getItem("email"),
    //  }
    // const chatString = JSON.stringify(chat)
    // socket.emit('chatWithUser', chatString);

    // -------  Method 2. (Axios)
    axios.post(`http://localhost:4000/chat`, {
      chatFrom: localStorage.getItem("email"),
      chatFromName: localStorage.getItem("name"), 
      sendTo: props.currentmail,
      sendToName: props.currentcontact,
      message: message,
      timestamp: new Date()
    }).then((result)=>{
      if(result){
        console.log("send res --> ", result.data.id)
        const id = result.data.id;
        const newDisplayMessage = {
          name: localStorage.getItem("email"),
          newMessage: message,
          id: result.data.id,
          styleOfFlex: "flex-end"
        }
        setDisplayMessages([...displayMessages, newDisplayMessage])
        setDisplayIds([...displayIds, id])
        setMessage("")
      }
    })
    .catch((err)=>{
      console.log(err)
    })


  }

  //useEffect(getMesg, [props.set])
  
  // program to display a text using setInterval method
function getExistingChat() {
  const ChatHistorySendTo = localStorage.getItem("email")
  const ChatHistoryChatFrom = props.currentmail
  axios.get(`http://localhost:4000/chat?sendTo=${ChatHistorySendTo}&chatFrom=${ChatHistoryChatFrom}`, {
    responseType: "json",
  })
  .then((result)=>{
    console.log("json ------> ", result)
      console.log(result.data);
      console.log( result.data.messagesList.length )
      const arr = [...displayMessages]
      const idList = [...displayIds];
      console.log("idList --> ",idList)
        for(var i=0; i<result.data.messagesList.length; i++){
          var styleOfFlex
          if( result.data.messagesList[i].chatFrom === localStorage.getItem("email")){
            styleOfFlex = "flex-end"
          }else{
            styleOfFlex = "flex-start"
          }
          if(idList.includes(result.data.messagesList[i].Messageid)){
            console.log("Message already displayed");
          }
          else{
            const newDisplayMessage = {
              name: localStorage.getItem("email"),
              chatFromName: result.data.messagesList[i].chatFromName,
              sendToName: result.data.messagesList[i].sendToName,
              newMessage: result.data.messagesList[i].message,
              id: result.data.messagesList[i].Messageid,
              styleOfFlex,
            }
            arr.push(newDisplayMessage)
            idList.push(result.data.messagesList[i].Messageid)
            
          }
          
        }
      console.log(arr)
      setDisplayMessages(arr)
      setDisplayIds(idList)
  })
  .catch((err)=>{
    console.log(err)
  })
}

// setInterval(getMessage, 5000);
useEffect(() => {
   getExistingChat() 
    // -> use this if u use axios
  // getChatRequests()
}, [ props.currentcontact ])
     



  return (
    <>
          
            
            
     
    <Scrollbars style={{ width: "100%", height: 500 }}>
      <p>
        <ul>  
          {
          displayMessages.map((displayMessage) => (
            <div style={{display: "flex", justifyContent: displayMessage.styleOfFlex, paddingRight:"50px"}}>  
            <span>{displayMessage.newMessage}</span>
            </div>
          ))}
        </ul>
      </p>
      </Scrollbars>     

    <div>
      {
        (props.currentcontact ) ? (
          <MDBInputGroup 
            style={{border: "2px black solid"}} 
            textBefore={[ <FontAwesomeIcon icon={faFaceSmile}/> , <FontAwesomeIcon icon={faLink}/>]}
            textAfter={[
              <FontAwesomeIcon icon={faMicrophone} />,  
              <button onClick={ (e)=>handleClick(e, props) }>Send</button>
            ]}
          >
            <input 
            className='form-control'
            type='text' 
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
          </MDBInputGroup>
        )
        :
        (
          <h5>
            Select any Contact to Chat
          </h5>
        )
      }
    </div>
    </>
  );
}
const mapStateToProps = (state) => {
  console.log('state in messages-> ', state);
  return {
    currentcontact: state.contact.currentcontact,
    currentmail: state.contact.currentmail
  }
}
const mapDispatchToProps = (dispatch) => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Message)




