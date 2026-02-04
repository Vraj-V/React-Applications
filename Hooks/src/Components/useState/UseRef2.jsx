import React,{useState,useRef, useEffect} from 'react'

const UseRef2 = () => {
const [currentChar,setChar] = useState('A');
const prevChar = useRef([])

useEffect(()=>{
    // console.log("rendering happening!");
    prevChar.current.push(currentChar);
},[currentChar])

    return (
        <div>
            <h3>UseRef Example 2:</h3>
            <div>
                <input type="text" value={currentChar} onChange={(e)=>{
                    setChar(e.target.value)
                }} />
    <br />
                <div>
                {prevChar.current.map((char,index)=>{
                    return <div key={index}>{char}</div>
                })}
</div>

            </div>

        </div>
    )
}

export default UseRef2