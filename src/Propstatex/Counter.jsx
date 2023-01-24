import React, { Component } from 'react'

class Counter extends Component {
    state={
        qty:1
    }
    decrHandler=()=>{
        this.setState({qty:this.state.qty-1})

    }
    incrHandler=()=>{
        this.setState({qty:this.state.qty+1})

    }

  render() {
    return (
      <div>
        <h1>Counter Component</h1>
        <h3>Counter Value:{this.state.qty}</h3>
        <button onClick={this.decrHandler}>decr</button>
        <button onClick={this.incrHandler}>incr</button>

        
      </div>

    )
  }
}

export default Counter