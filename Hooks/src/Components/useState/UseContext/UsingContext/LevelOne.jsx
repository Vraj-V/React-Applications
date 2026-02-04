import React,{useContext} from 'react'
import MessageContext from './MessageContext'

const LevelOne = () => {
    const [message, setMessage] = useContext(MessageContext)
    const changemsg =()=>{
        setMessage("Thanks")
    }
  return (
    <div>
        <p>{message}</p>
        <LevelTwo />
        <button onClick={changemsg}>Update</button>
    </div>
  )
}

export default LevelOne