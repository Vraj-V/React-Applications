import React,{useState} from 'react'
import { Provider } from './MessageContext'
const UseContextw = () => {
    const [message, setMessage] = useState("Please join")
  return (
    <Provider>
        <div>
            <LevelOne />
        </div>
    </Provider>
  )
}

export default UseContextw