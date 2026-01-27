import React,{useState} from 'react'
import axios from 'axios'
const Axioss = () => {
    const [data, setData] = useState([])

    const getData = async ()=>{
        console.log('running')
        const response = await axios.get("https://picsum.photos/v2/list")
        console.log(response.data)
        // const data = response.data
        setData(response.data)
    }

  return (
    <div>
        <button onClick={getData}>Photo</button>
        <div className='container'>
    {data.map((e,idx)=>{
        console.log(e.url)
        return <div>
            {data.map((e)=>{

                return <h1>{e.name}</h1>
            })}
                </div>
})}
        </div>
    </div>
  )
}

export default Axioss