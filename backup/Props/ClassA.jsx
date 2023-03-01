import React, { Component } from 'react'
import ClassB from './ClassB'
// import imageOne from '../images/one.png'


export class ClassA extends Component {
    product_Name="Iphone12"
    product_Price=45000
    // image=imageOne
    
  render() {
    return (
      <div>
        <h2>Product Component</h2>
        {/* <img src={imageOne} alt="" /> */}
        <hr/>
        <ClassB name={this.product_Name}
            price={this.product_Price}
            // image={this.image}
            />
           
      </div>
    )
  }
}

export default ClassA