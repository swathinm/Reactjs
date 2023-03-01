import React, {useRef} from 'react'
 import Signin from './Signin';
import 'bootstrap/dist/css/bootstrap.min.css';


const Login1 = () => {
   
        let refBtn = useRef();
        let updateCheckBox = (event) => {
        //console.log(event.target.checked)
        refBtn.current.disabled = !event.target.checked

    }

  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-5">
                
                    <div className="card form-group">
                        <div className="card-header form-control">
                         <h1>LoginForm</h1>
                        </div>
                        <div className="card-body form control" >
                           <form>
                            <div className='form-group'>
                            <input type="text" className='form-control' placeholder='email' />
                            </div>
                            <div className='form-group' >
                            <input type="text" placeholder='password' className='form-control'/>
                            </div>
                            <div className='form-group'>
                            <input type="checkbox"  className='form-check' onChange={updateCheckBox}/>
                            </div>
                           
                            <div className="form-group">
                                <input type="submit" ref={refBtn} value="Login" className="btn btn-success" disabled />
                            </div>
                            </form>
                           
                        </div>
                        
                    </div>
            
            </div>
            <div className='col-6'>
                <Signin/> 
            </div>
        </div>
    </div>
  )
}

export default Login1