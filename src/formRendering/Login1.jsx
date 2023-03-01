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
        <h1>login</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <hr />
        <form onSubmit={this.submitHandler}>
            <label >email</label>
            <input type="text" placeholder='email' onChange={this.emailHandler}/>
            <br />
            <label >password</label>
            <input type="pasword" placeholder='password' onChange={this.passwordHandler} />
            <br />
            <input type="submit" value="login" />
         
        </form>


        
      </div>
    )
  }
}

export default Login