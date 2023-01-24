import React, { Component } from 'react'

class product extends Component {
    constructor(props){
        super(props)
        Product_name:"iphone"
        price:45000
        qty:0
    }
    decrHandler(){
      this.setState({qty:this.state.qty -1})
    }
    incrHandler(){
      this.setState({qty:this.state.qty + 1})
    }
  render() {
    return (
      <div>
        <h2>Product Compnent</h2>
        <div className="container">
            <div className="row">
                <div className="col">
                    <table>
                        <thead>
                            <tr>
                                <th>Product_name</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{this.Product_name}</td>
                            <td>{this.price}</td>
                            <td>{this.qty}</td>
                            <td>{this.qty}</td>
                            <button></button>
                          </tr>

                            
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
      </div>
    )
  }
}

export default Product