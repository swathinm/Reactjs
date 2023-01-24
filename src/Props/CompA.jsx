import React from 'react'
import CompB from './CompB'

function CompA() {
    let ename="Swathi"
    let esal=30000
  return (
    <div>
        <h2>CompA</h2>
        <hr/>
        <CompB prop1={ename} prop2={esal}/>
    </div>
    
    
  )
}

export default CompA