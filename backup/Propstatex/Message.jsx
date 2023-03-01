import React, { Component } from 'react'

export class Message extends Component {
    constructor(props){
        super(props)
        console.log("first Constructor")
        this.msg="hello"
    }
    gmHandler=()=>{
        this.msg="Hello Gm everyone"
        console.log(this.msg)
        this.forceUpdate()
    }
    render() {
        console.log("second  render")
    return (
      <div>
        <h1>Message Component</h1>
        <h2>Message:{this.msg}</h2>
       
        <button onClick={this.gmHandler}>gm</button>
    </div>
      
    )
  }
}

export default Message