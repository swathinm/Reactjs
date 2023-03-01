import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import {incrAction, decrAction } from "../Reducer/product.action";
let Product=()=>{
    let dispatch=useDispatch();
    let product=useSelector((state)=>{        
        return state
    })
    return <div>
        <i className="fa fa-minus-circle" onClick={()=>{dispatch(decrAction())}}></i>{product.qty}<i className="fa fa-plus-circle" onClick={()=>{dispatch(incrAction())}}></i>
    </div>
}
export default Product