import React, { use } from 'react'
import { useState } from 'react'
const Counter = () => {
    const [count,setCount] = useState(0);

    function Increment(){
        setCount((count)=> count +1)
        console.log(count);

    }
    function decrement(){
        setCount((count) => {
            if(count <= 0){
                alert("Fuck ugly!!")
                return 0;
            }
            return count -1;
        })
        console.log(count);

    }
    return (
    <>
    <div className=' p-5 mx-[50%] mt-4'>
        <h1 className='p-5'>{count}</h1>
        <button className='border-2 bg-sky-500 hover:bg-sky-700 px-5 text-1xl ' onClick={Increment}>+</button>
        <br />
        <br />
        <button className=' border-2 bg-sky-600 hover:bg-white px-5 text-1xl' onClick={decrement}>-</button>
    </div>
    </>
    )
}

export default Counter