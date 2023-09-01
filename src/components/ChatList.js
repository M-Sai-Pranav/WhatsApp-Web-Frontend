import React, { Component, useState, createContext, useEffect} from 'react'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import Edit from './Edit';
import axios from 'axios';
import Message from './Message';
import { Link } from 'react-router-dom';
import {  setCurrentContact } from '../redux/Contact/contact.actions'
import AcceptedChat from './AcceptedChat';
import { connect } from "react-redux"
const Name = createContext()
function ChatList(props) {
    
  var today = new Date();
  var time = today.getHours() + ':' + today.getMinutes(); 
  // const [contact, setContact] = useState();
  // const [image, setImage] = useState();
  // const [message, setMessage] = useState()
  // const [unread, setUnread] = useState(5)
  // const [sendToMailID, setSendToMailID] = useState();
  // const [currentDateTime, setCurrentDateTime] = useState()
  // const [acceptedContact, setAcceptedContact] = useState([])
  // const [displayContact, setDisplayContact] = useState([])
  // const [displayMail, setDisplayMail] = useState([])
  // const [enterKey, setEnterKey] = useState()


  const [displayMessage, setDisplayMessage] = useState([])
  const [displayRequest, setDisplayRequest] = useState([])

 function displayChat(){
 
   (props.setContact("Pranav")) //getContacts
  
 }

 const getAcceptedContact = () => {
    const chatReceivedFromMailID = localStorage.getItem("email")
    console.log(chatReceivedFromMailID)
 }
 const onContactClick = ( displaySelectedContact, displaySelectedsendToMailID) => {
  console.log("in contact click ---->", displaySelectedContact, displaySelectedsendToMailID)
  props.setCurrentContact(displaySelectedContact, displaySelectedsendToMailID)
  localStorage.setItem("selectedContact", displaySelectedContact)
  localStorage.setItem("selectedSendToMail", displaySelectedsendToMailID)
 }

  const getContacts = () => {
    const sendTo = localStorage.getItem("email")
    console.log("local Storage mail id ------>",sendTo)
  axios.get(`http://localhost:4000/chatList?sendTo=${sendTo}`, {
    responseType: "json",
  })
  .then((result)=>{
    console.log("results   ====> front end",result)
    const arr = [];
    for(var i=0; i<result.data.messagesList.length; i++){
      const newDisplayMessage = {
        contact: result.data.messagesList[i].sendTo,
        sendToMailID: result.data.messagesList[i].sendToMailID,
        image: "https://avatars.githubusercontent.com/u/94521881?v=4",
        message:2,
        unread:3,
        currentDateTime:time
      }
      // console.log("after for loop in messages ",result.data.messagesList[i].sendTo)
      console.log("after for loop in messages ",result)
      
      arr.push(newDisplayMessage)
      
    }
    console.log("array after messages push ", arr)
    setDisplayMessage(arr)
  })
  .catch((err)=>{
    console.log(err)
  })
  }

//  const acceptedRequest = (mail, contact) => { coming from 109, acceptedRequest muted 
//       console.log("mail------>",mail)
//       console.log("chat------>", contact)
//       const acceptedMail = mail;
//       const acceptedContact = contact;
//       axios.post(`http://localhost:4000/acceptedChat`, {
//         sendToMailID: acceptedMail,
//         sendTo: acceptedContact,
//         chatReceivedFromMailID: localStorage.getItem("email"),
//         chatReceivedFrom: localStorage.getItem("name")
//       })
//       .then((result)=>{
//         if(result){
//           console.log("Accepted request contact details sent ----> ", result)
//         }
        
//       })
//       .catch((err)=>{
//         console.log(err)
//       })

//  }

// coming from 156, getChatRequests muted then 159 displayRequest will not be functioned go to 86
  // const getChatRequests = () => {
  //   const ownermail = localStorage.getItem("email") //changed due to error in requests table
  //   axios.get(`http://localhost:4000/requestChat?ownermail=${ownermail}`, {
  //   responseType: "json",
  // })
  // .then((result)=>{
  //   // console.log(result)
  //   const arr = [];
  //   console.log("req chat results  ----> ",result);
  //   // alert("getChatRequest printed on console")
  //   for(var i=0; i<result.data.reqList.length; i++){
  //     const newDisplayRequest = {
  //       contact: result.data.reqList[i].reqFrom,
  //       sendToMailID: result.data.reqList[i].reqFromMail,
  //       image: "https://avatars.githubusercontent.com/u/94521881?v=4",
  //       message:2,
  //       unread:3,
  //       currentDateTime:time,
  //       contactMail: result.data.reqList[i].reqFromMail,
  //     }
  //     console.log(result.data.reqList[i].reqFromMail)
      
  //     arr.push(newDisplayRequest)
      
  //   }
  //   setDisplayRequest(arr)
  // })
  // .catch((err)=>{
  //   console.log(err)
  // })
  // }

  useEffect(() => {
          getContacts()
          // getChatRequests()
  }, [])


  // function updateCounter() {
  //   console.log(props.setValue(props.value+1))
  // }
    return (
      <>   
      
      
      {/* <button onClick={getContacts} >getAcceptedContact</button>  */}
      {/* no. 157 button is muted go to no. 110 getChatRequests fun is muted go to ChatRequest.js page  */}
      {/* <button onClick={getChatRequests} >getChatRequest</button> */} 
      <div style={{ marginTop: "100px" }}> 
      {displayRequest.map((displayReq)=> {
        console.log(displayRequest)
               return (
               <div style={{
                // height: "82%",
                textAlign: "center",
                // marginBottom: "9%",
                borderRight: 'solid 1px grey'
              }} onClick={displayChat}
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
                            {/* <button onClick={() => {acceptedRequest(displayReq.contactMail, displayReq.contact)}} >Accept</button> */}
                          </span>
                        </div>
                        {/* for unread  */}
                        <div className='flex-fill '>
                          <span className='fa d-icon d-icon-chevron-down svg-icon svg-node'>    
                          <button>Reject</button>
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
<div style={{ marginTop: "50px" }}>  
{displayMessage.map((displayContact)=> {
      console.log("display message here -------> ", displayMessage)
      console.log("display conatct here -------> ", displayContact)
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
          {/* contact to be passed as prop  */}
            <div  className="d-flex mb-1 flex-row"  onClick={ () => onContactClick( displayContact.contact,  displayContact.sendToMailID) } >
              {/* for profile picture */}
          
                <div className="d-flex justify-content-start">
                  <span>
                    <Image src={displayContact.image} style={{height:"75px", width:"75px", }} roundedCircle />
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
                       {displayContact.contact}
                      </h5>
                    </span>
                  </div >
                  {/* for time */}
                  <div className='flex-fill'>
                    <span>
                      <Badge bg="success" pill>
                        {displayContact.currentDateTime}
                      </Badge>
                    </span>
                  </div>
                </div>
                {/* for message and unread */}
                <div className="d-flex justify-content-between align-items-start flex-fill " >
                  {/* for message  */}
                  <div className='flex-fill'>
                    <span>
                      {displayContact.sendToMailID}
                    </span>
                  </div>
                  {/* for unread  */}
                  <div className='flex-fill '>
                    <span className='fa d-icon d-icon-chevron-down svg-icon svg-node'>
                    <Badge bg="success" pill>
                      {displayContact.unread}
                    </Badge>
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

    </>
    )
  
}
const mapStateToProps = (state: any) => {
  return {
    currentcontact: state.contact.currentcontact,
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    setCurrentContact: (data, mail) => dispatch(setCurrentContact(data, mail)) 
  }
}
export { Name };
export default connect(mapStateToProps, mapDispatchToProps)(ChatList)
// use this code to get accepted contacts

