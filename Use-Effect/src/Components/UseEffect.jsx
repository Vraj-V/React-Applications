import React,{useEffect, useState} from 'react'

const UseEffect = () => {
    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(100)
    /*
    useEffect(function(){
        console.log("running!!",num)
    });
    */
    // Mountain Dependencies
    //Why?: Because it update or run everytime the button the clicked, making a not dependency on anything.

    /*
    useEffect(function(){
        console.log("run",num)
    },[])
    */
    //Empty Dependence UseEffect
    //Why?: it has empty array means the Effect is depend upon the something, so it will not change the variable or     Effect, until Effect is achieved

    useEffect(function(){
        console.log("running!",num);
    },[num])
    //Here the UseEffect is depend upon the [num], So every time the num change the UseEffect Run in side way.
    return (
        <div>
            <h1>Num 1{num}</h1>
            <h1>Num 2 {num2}</h1>
            <button 
                onMouseEnter={()=>{
                setNum(num+1)
            }}
            onMouseLeave={()=>{
                setNum2(num2+10);
            }}
            style={{
                padding:'20px 40px'
            }}
            >Mouse</button>
        </div>
    )
}

export default UseEffect

// Use -Effect Example
// Define : Help to run task that are perform side by side with main task, but does not affect the main task executions
// It is callback and need a function 
// Syntax 
/*
  import {useEffect} from 'react'

  //Inside your main function

    useEffect(function(){
      //code
    })
*/