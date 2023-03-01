import React, { Component } from 'react'

class Counter1 extends Component {
    state={
        qty:0
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
        <h1>Counter1 Component</h1>
        <h3>Quantity={this.state.qty}</h3>
        <button onClick={this.decrHandler}>decr</button>
        <button onClick={this.incrHandler}>incr</button>

      </div>
    )
  }
}

export default Counter1