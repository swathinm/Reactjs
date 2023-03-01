import React, { Component } from 'react'

export class Message1 extends Component {
    constructor(props){
        super(props)
        console.log("first constructor")
        this.msg="hello"
    }
    gmHandler=()=>{
        this.msg="Have a good day"
        console.log(this.msg)
        this.forceUpdate()
    }
    gaHandler=()=>{
        this.msg="Have a nice day"
        console.log(this.msg)
        this.forceUpdate()
    }
    gnHandler=()=>{
        this.msg="Have a wonderful  day"
        console.log(this.msg)
        this.forceUpdate()
    }

  render() {
    console.log("second render")
    return (
      <div>
        <h1>Message1</h1>
        <h3>Message1:{this.msg}</h3>
        <button onClick={this.gmHandler}>gm</button>
        <button onClick={this.gaHandler}>ga</button>
        <button onClick={this.gnHandler}>gn</button>

      </div>
    )
  }
}

export default Message1