import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';

export default class Footer extends Component {
  render() {
    return (
    <div style={{
            textAlign: "center", 
            backgroundColor: "lightgray",
            height: "2%",
            position: "fixed",
            left: 0,
            bottom: 0,
            width: "100%"
        }}
        

    >
        <Row style={{height: "70%", background: "lightgray"}}>
          <span style={{textAlign:"center"}}></span>
        </Row>
    
      </div >
    )
  }
}

// 126 className="d-flex justify-content-between align-items-start"
