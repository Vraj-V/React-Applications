import React,{useEffect,useState} from 'react'
// is used to perform side effect in functional component
const UseEffect = () => {
    const [first, setfirst] = useState(['vraj','vivek','valand'])
    
        // useEffect(()=>{
        //     console.log("useEffect")
        // })          //Infinite Render
    
    useEffect(()=>{
        // console.log("useEffect")
    },[])          //Single Render

    //     useEffect(()=>{
    //     console.log("useEffect")
    // },[first])          //Single Render it changes as the first changes

    const submit =()=>{
        setfirst([...first,'mansu'])
    }
  return (
    <div>
        <h3>UseEffect</h3>
        <p>  </p>
    {first.map((item,index)=>{
        return <p key={index}>{item}</p>
    })}
        <button onClick={submit}>Submit</button>
    </div>
  )
}

export default UseEffect