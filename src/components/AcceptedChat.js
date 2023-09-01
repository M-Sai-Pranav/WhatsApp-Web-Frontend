import React, { Component, useState, createContext, useEffect} from 'react'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import Edit from './Edit';
import axios from 'axios';
import Message from './Message';

function AcceptedChat(){
    var today = new Date();
  var time = today.getHours() + ':' + today.getMinutes(); 
    const [displayMessage, setDisplayMessage] = useState([])
    const getContacts = () => {
        const sendTo = localStorage.getItem("mailID")
        console.log("send to ====>",sendTo)
      axios.get(`http://localhost:4000/chatList?sendTo=${sendTo}`, {
        responseType: "json",
      })
      .then((result)=>{
        // console.log(result)
        const arr = [];
        for(var i=0; i<result.data.messagesList.length; i++){
          const newDisplayMessage = {
            contact: result.data.messagesList[i].sendTo,
            image: "https://avatars.githubusercontent.com/u/94521881?v=4",
            message:2,
            unread:3,
            currentDateTime:time
          }
          console.log(result.data.messagesList[i].sendTo)
          console.log("checking for send to mail ------> ", result.data.messagesList[i])
          arr.push(newDisplayMessage)
          
        }
        setDisplayMessage(arr)
      })
      .catch((err)=>{
        console.log(err)
      })
      }

      return(
        <>
        <button onClick={getContacts} >getContacts</button>
        <div>

        {displayMessage.map((displayContact)=> {
      console.log(displayMessage)
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
            <div  className="d-flex mb-1 flex-row" >
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
                      {displayContact.message}
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

export default AcceptedChat