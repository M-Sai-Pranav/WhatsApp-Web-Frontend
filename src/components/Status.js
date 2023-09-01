import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignRight, faBars, faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  Link } from 'react-router-dom';
import ChatList from './ChatList';
import Message from './Message';
import StatusList from './StatusList'
export default class Content extends Component {
 render() {
   return (
     <div style={{
           height: "82%",
           textAlign: "center",
           marginBottom: "9%"
       }}
   >
   <Container>
     <Row style={{border: 'solid 1px black',  background: "grey"}}>
       <Col sm={4}>
         <StatusList/>
       </Col>
       <Col sm={8}>
         <Row style={{height: '1000px',  background: "black"}}></Row>
         <Row>
           
         </Row>
       </Col>
     </Row>

   </Container>
   </div>
   )
 }
}

