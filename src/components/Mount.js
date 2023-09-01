import React, { Component } from 'react'

export default class Mount extends Component {
  
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
      }
      componentDidMount() {
        console.log("comp mounted")
      }    

  render() {
    return (
      <div>
        <h1>My Favorite Color is </h1>
      </div>
    )
  }
}
