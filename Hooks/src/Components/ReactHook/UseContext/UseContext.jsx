import React from 'react'
import Context from './Context'

const UseContext = () => {
    const mes= ()=>{
        console.log('parent calling')
    }
  return (
    <div>
        <h3>UseContext</h3>
        <br />
        <Context message = "Hello from parent" mes={mes}/>
    </div>
  )
}

export default UseContext