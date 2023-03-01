import React, { Component } from 'react'

 class Message extends Component {
    state={
      msg:"Hello"
    }
    updateHandler=(value)=>{
      this.setState({
        msg:value
      })
    }
   
  render() {
    return (
      <div>
        <h1>Message:{this.state.msg}</h1>
  
        <button onClick={this.updateHandler.bind(this,"hello gm")}>gm</button>
        <button onClick={this.updateHandler.bind(this,"Hello Ga")}>ga</button>
        <button onClick={this.updateHandler.bind(this,"Hello Gn")}>gn</button>
       
       
      </div>
    )
  }
}

export default Message