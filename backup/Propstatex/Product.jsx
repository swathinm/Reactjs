import React, { Component } from 'react'
class Product extends Component {
        state={
        Product:{
          Product_name:"iphone",
          price:45000,
          qty:1,
          img:"https://rukminim1.flixcart.com/image/224/224/xif0q/mobile/s/y/0/-original-imaggbrbxkqr3v3u.jpeg?q=90"
        }
      }
    decrHandler=()=>{
          this.setState({
            Product:{
              ...this.state.Product , qty:this.state.Product.qty-1
            }
          })
    }
    incrHandler=()=>{
      this.setState({
        Product:{
          ...this.state.Product , qty:this.state.Product.qty+1
        }
      })
    }
    
  render() {
    return (
      <div>
        <h2>Product Compnent</h2>
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Product_name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{this.state.Product.Product_name}</td>
                            <td><img src={this.state.Product.img} width="80px" alt="" /></td>
                            <td>{this.state.Product.price}</td>
                            <td><i onClick={this.decrHandler} className="fa fa-minus-circle" ></i>{this.state.Product.qty} <i onClick={this.incrHandler} className="fa fa-plus-circle"> </i> </td>
                            <td>{this.state.Product.qty * this.state.Product.price}</td>
                            
                           
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