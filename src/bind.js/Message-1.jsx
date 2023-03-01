import React, { Component } from 'react'

 class Message extends Component {
    state={
      msg:"Hello"
    }
    gmHandler=()=>{
      this.setState({msg:"Hello gm"})
    }
    gaHandler=()=>{
      this.setState({msg:"Hello ga"})
    }
    gnHandler=()=>{
      this.setState({msg:"Hello Gn"})
    }
  render() {
    return (
      <div>
        <h1>Message:{this.state.msg}</h1>
  
        <button onClick={this.gmHandler}>gm</button>
        <button onClick={this.gaHandler}>ga</button>
        <button onClick={this.gnHandler}>gn</button>
       
       
      </div>
    )
  }
}

export default Message