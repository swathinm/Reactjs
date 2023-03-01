import React from 'react'
import Messageee from './Messageee';
import { useState } from 'react'
function Message(){
let[product,setProduct]=useState({Name:"Iphone",Price:45000});
return (
    <div>
        
        <h2>{product}</h2>
        <Messageee prop1={product.Name} prop2={product.Price}/>
    </div>
)
}

export default Message

