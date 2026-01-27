import React,{ useState} from 'react'

const Counter = () => {

    const [first, setFirst] = useState(10);
    const [user,setuser]  = useState("You")
    function Increment(){
        setFirst(first+1)
        console.log("btn clicked");
      setuser("Rohans")

    }

    function Decrement(){
        setFirst(first-1)
        console.log("btn clicked");
        setuser("Rohans")
    }
       function JmpBy5(){
        setFirst(first+5)
        setuser("No")
        console.log("btn clicked");
    }
  return (
    <div className='container'>
        <h1>This is value  {first} and {user}</h1>
        <div className='contain'>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={JmpBy5}>Jump By 5</button>
    </div>
    </div>
  )
}

export default Counter