import React, { Component } from 'react'

class Hike extends Component {
  state={
    salary:45000
  }
  updateHandler=(hike)=>{
    this.setState({
      salary:this.state.salary+(this.state.salary*hike/100)
    })

  }

  render() {
    return (
      <div>
        <h1>Hike:{this.state.salary}</h1>
        <button onClick={this.updateHandler.bind(this,100)}>100%</button>
        <button onClick={this.updateHandler.bind(this,50)}>50%</button>
        <button onClick={this.updateHandler.bind(this,10)}>10%</button>
        <button onClick={this.updateHandler.bind(this,0)}>0%</button>
        
      </div>
    )
  }
}

export default Hike