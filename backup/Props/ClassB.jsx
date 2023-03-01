import React, { Component } from 'react'

class ClassB extends Component {
  render() {
    return (
      <div>
        <h4>Cart Component</h4>
        <pre>{JSON.stringify(this.props)}</pre>
        <h4>Product Name:{this.props.name}</h4>
        <h4>Product Price:{this.props.price}</h4>
        <h4>Image:{this.props.image}</h4>
      </div>
    )
  }
}

export default ClassB