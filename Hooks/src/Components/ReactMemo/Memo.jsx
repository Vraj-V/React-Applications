import React,{useState} from 'react'
import Counter from './Counter';
import CounterMemo from './CounterMemo';

const Memo = () => {
    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState('');

  return (
    <div>
        {/* <Counter count ={count} /> */} 
        {/* Not the proper method to render */}
    <CounterMemo count={count}/>

    <button onClick={()=>{
        setCount(count + 1)
    }}>Increment</button>
    <input type="text" value={msg} onChange={(e)=>{
        setMsg(e.target.value);
            }}
    placeholder='type something!'/>
    </div>
  )
}

export default Memo