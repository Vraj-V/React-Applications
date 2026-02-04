import React, { createContext, useState} from 'react'

const MessageContext = createContext();

function Provider (props){
        const [message, setMessage] = useState("Please join")
    
    return <MessageContext.Provider value={[message,setMessage]}>{props.children}</MessageContext.Provider>
}
export {Provider}
export default MessageContext;