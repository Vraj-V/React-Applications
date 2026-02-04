import React, { useState } from 'react'

const Context3 = (props) => {
    const [state,setState] = useState(false)

    const change =() =>{
        setState(true);
        let ms = props.mes();
        console.log(ms)
    }
  return (
    <div>
        <button onClick={change}>Show</button>
        {state && <p>{props.message}</p> }
    </div>
  )
}

export default Context3