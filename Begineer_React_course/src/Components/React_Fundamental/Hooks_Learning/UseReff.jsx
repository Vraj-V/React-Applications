import React,{useRef} from 'react';

const UseReff = () => {
const input =useRef(null); 

const handleClick =()=>{
    input.current.focus();
    console.log(input.current.value);
}
    return (
        <div>
            <h1>UseReff Hook</h1>
            <input ref={input} type="text" />
            <button onClick={handleClick}>Focus Input</button>
            </div>
    )
}
export default UseReff;