import React, { useState } from 'react'

const Input = () => {

    const [value,setvalue] = useState("");

    function inputHandler(val){
        console.log(value)
        if(typeof(value) === "number"){
            alert("Enter a valid name");
            
        }
        // console.log(typeof(value))
        setvalue("");
    }

  return (
    <div>
        <input type="text" placeholder='Enter your name'
        value={value}
        onChange={(e)=>{
            setvalue(e.target.value);
        }}
        />
        <button onClick={inputHandler}>Submit</button>

    </div>
  )
}

export default Input