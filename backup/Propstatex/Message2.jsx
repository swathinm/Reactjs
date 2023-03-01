import React, { Component } from 'react'

 class Message2 extends Component {
    state={
        msg:"hello"
    }
    gmHandler=()=>{
        this.setState({ msg: "GM Rahul Gandhi" })

    }
    gaHandler=()=>{
        this.setState({ msg: "GA Rahul Gandhi" })

    }
    gnHandler=()=>{
        this.setState({ msg: "GN Rahul Gandhi" })

    }

  render() {
    return (
      <div>
        <h2>Message2</h2>
        <h3>Message:{this.state.msg}</h3>
        <button onClick={this.gmHandler}>gm</button>
        <button onClick={this.gaHandler}>ga</button>
        <button onClick={this.gnHandler}>gn
        </button>
        
      </div>
    )
  }
}

export default Message2