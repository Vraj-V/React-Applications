import React, { useContext } from 'react'
import MessageContext from './MessageContext'

const LevelThree = () => {
    let message = useContext(MessageContext);
  return (
    <div>
        {message}
    </div>
  )
}

export default LevelThree