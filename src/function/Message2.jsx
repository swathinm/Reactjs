
import React from 'react'
import { useState } from 'react'


function Message(){

let [color,setColor]=useState("red")
let[qty,setQty]=useState(0)
let[mesg,setMesg]=useState("hello")
let[users,setusers]=useState([10,20,30])
let[product,setProduct]=useState({Name:"Iphone",Price:45000});


return (
    <div>
        <h2>{color}</h2>
        <button onClick={()=>setColor("blue")}>click</button>
        <h2>{qty}</h2>
        <button onClick={()=>setQty(qty=>qty - 1)}>decr</button>
        <button onClick={()=>setQty(qty=>qty + 1)}>incr</button>
        <h2>{mesg}</h2>
        <button onClick={()=>setMesg("Hello Good Morning")}>Ok</button>
        <h2>{users}</h2>
        <h2>{JSON.stringify(product)}</h2>
    </div>
)
}
export default Message
