import React, { Component } from 'react'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default class Content extends Component {
  constructor() {  
    super();  
    var today = new Date();
    var time = today.getHours() + ':' + today.getMinutes();       
    this.state = { 
        content : [
            {
                image: "https://avatars.githubusercontent.com/u/94521881?v=4",
                name: "Pranav",
                message: "Ela unnav ra ?",
                unread: "5",
                currentDateTime: time
            
            },
            {
              image:  "https://avatars.githubusercontent.com/u/94521881?v=4",
                name: "Pranav",
                message: "Ela unnav ra ?",
                unread: "5",
                currentDateTime: time
            },
            {
              image: "https://avatars.githubusercontent.com/u/94521881?v=4",
                name: "Pranav",
                message: "Ela unnav ra ?",
                unread: "5",
                currentDateTime: time
            },
            {
              image: "https://avatars.githubusercontent.com/u/94521881?v=4",
                name: "Pranav",
                message: "Ela unnav ra ?",
                unread: "5",
                currentDateTime: time
            },
            {
              image: "https://avatars.githubusercontent.com/u/94521881?v=4",
              name: "Pranav",
              message: "Ela unnav ra ?",
              unread: "5",
              currentDateTime: time

          },
          {
            image: "https://avatars.githubusercontent.com/u/94521881?v=4",
            name: "Pranav",
            message: "Ela unnav ra ?",
            unread: "5",
            currentDateTime: time
          },
          {
            image: "https://avatars.githubusercontent.com/u/94521881?v=4",
            name: "Pranav",
            message: "Ela unnav ra ?",
            unread: "5",
            currentDateTime: time
          }
        ]
    };  
}  
  render() {
    return (
      <>
      <div style={{
            height: "82%",
            textAlign: "center",
            marginBottom: "9%",
            borderRight: 'solid 1px grey'
        }}
    >
      <div className="d-flex mb-1 flex-row border-bottom border-dark " style={{height: '95px'}}>
                {/* Profile Pic */}
                <div style={{marginTop:"15px"}}>
                    <div>
                        <div className="d-flex justify-content-start ">
                            <span>
                                <Image src="https://avatars.githubusercontent.com/u/94521881?v=4" style={{height:"49px", width:"49px" }} roundedCircle />
                            </span>
                        </div>
                    </div>
                </div>
                {/* User Name */}
                <div style={{marginTop:"15px", paddingLeft: "15px"}}>
                    <div>
                        Pranav
                    </div>
                    <span>
                        No Updates
                    </span>
                </div>

            </div>
      <div style={{textAlign: 'left'}}>RECENT</div>   
      <div className="d-flex mb-1 flex-row  " style={{height: '95px'}}>
                {/* Profile Pic */}
                <div style={{marginTop:"15px"}}>
                    <div>
                        <div className="d-flex justify-content-start ">
                            <span>
                                <Image src="https://avatars.githubusercontent.com/u/94521881?v=4" style={{height:"49px", width:"49px" }} roundedCircle />
                            </span>
                        </div>
                    </div>
                </div>
                {/* User Name */}
                <div style={{marginTop:"15px", paddingLeft: "15px"}}>
                    <div>
                        Pranav
                    </div>
                    <span>
                        No Updates
                    </span>
                </div>

            </div>
      <div className="d-flex mb-1 flex-row border-bottom border-dark " style={{height: '95px'}}>
                {/* Profile Pic */}
                <div style={{marginTop:"15px"}}>
                    <div>
                        <div className="d-flex justify-content-start ">
                            <span>
                                <Image src="https://avatars.githubusercontent.com/u/94521881?v=4" style={{height:"49px", width:"49px" }} roundedCircle />
                            </span>
                        </div>
                    </div>
                </div>
                {/* User Name */}
                <div style={{marginTop:"15px", paddingLeft: "15px"}}>
                    <div>
                        Pranav
                    </div>
                    <span>
                        No Updates
                    </span>
                </div>

            </div>  
            <div style={{textAlign: 'left'}}>VIEWED</div>                          
      {
        
        this.state.content.map(function displayContent(element){
          return  (
        
            
        <div>
            {/* My Status */}
            
            {/* Others Status */}
            
            <div className=''>
                <div className='statusList'>
                    <div>
                      <div className="d-flex mb-1 flex-row " style={{height: '95px'}}>
                      {/* Profile Pic */}
                      <div style={{marginTop:"15px"}}>
                          <div>
                              <div className="d-flex justify-content-start ">
                                  <span>
                                      <Image src={element.image} style={{height:"49px", width:"49px" }} roundedCircle />
                                  </span>
                              </div>
                          </div>
                      </div>
                      {/* User Name */}
                      <div style={{marginTop:"15px", paddingLeft: "15px"}}>
                          <div>
                              {element.name}
                          </div>
                          <span>
                              Today at {element.currentDateTime}
                          </span>
                      </div>
                    </div>               
                  </div>
              </div>
            </div>
        </div> 
          ) 
        }) 
      }
    </div>
    </>
    )
  }
}
