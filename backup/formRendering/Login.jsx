import React, { Component } from 'react'

class Login extends Component {
    state={
        email:"",
        password:""
    }
    emailHandler=(event)=>{
        this.setState({email:event.target.value})
    }
    passwordHandler=(event)=>{
        this.setState({password:event.target.value})
    }
    submitHandler=(event)=>{
        console.log(this.state)
        event.preventDefault()
    }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              
            
            </div>
          </div>
        </div>
        


        
      </div>
    )
  }
}

export default Login