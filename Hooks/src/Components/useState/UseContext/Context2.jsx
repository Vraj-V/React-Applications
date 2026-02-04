import React from 'react'
import Context3 from './Context3'

const Context2 = (props) => {
  return (
    <div>
        <Context3 message = {props.message} mes={props.mes}/>
    </div>
  )
}

export default Context2