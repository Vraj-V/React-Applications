import React from 'react'

const Counter = ({count}) => {
    console.log("rendering the component!")
  return (
    <div>
        <h2>Count is : {count}</h2>
    </div>
  )
}

export default Counter