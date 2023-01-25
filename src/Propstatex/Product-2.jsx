import React, { Component } from 'react'

class Product extends Component {
        state={
        Product_name:"iphone",
        price:45000,
        qty:1
    }
    
  render() {
    return (
      <div>
        <h2>Product Compnent</h2>
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className='table'>
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
                            <td>{this.state.Product_name}</td>
                            <td>{this.state.price}</td>
                            <td>{this.state.qty}</td>
                            <td>{this.state.qty * this.state.price}</td>
                           
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