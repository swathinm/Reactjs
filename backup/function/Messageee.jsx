import React from 'react'

function Messageee(props) {
  return (
    <div>
    <h1>Message</h1>
    <pre>JSON.stringify(props)</pre>
    <h3>Prop1:{props.prop1}</h3>
    <h3>Prop2:{props.prop2}</h3>
    </div>
  )
}

export default Messageee