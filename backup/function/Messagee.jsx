import React from 'react'
import { useState } from 'react'


function Favcolor(){

const [color,setColor]=useState("Bye")
let[qty,setQty]=useState(0)
let[mesg,setMesg]=useState("hello")
let[users,setusers]=useState([10,20,30])
let[product,setProduct]=useState({})
return (
    <div>
        <h2>{color}</h2>
        <h2>{qty}</h2>
        <h2>{mesg}</h2>
        <h2>{users}</h2>
        <h2>{JSON.stringify(product)}</h2>
    </div>
)
}
export default Favcolor
