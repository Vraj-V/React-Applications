import axios from 'axios'
import React,{useState} from 'react'

const Axios = () => {
    const [data, setData] = useState([])

    const getAxios = async ()=>{
        console.log("awaiting for you request axios")
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(response.data);
        setData(response.data)
    }
  return (
    <div>
        <button onClick={getAxios}>Axios</button>
        {data.map((e,idx)=>{
            return <h1 key={idx}>{e.name}</h1>
        })}
    </div>
  )
}

export default Axios