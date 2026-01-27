import React from 'react'
import { useNavigate } from 'react-router';

const Buttons = () => {

    let navigate = useNavigate()
  return (
    <div className='flex gap-10 bg-gray-500'>
        
        <button
        onClick={()=>{
          console.log("click");
          navigate('/')
        }}
        className='px-5 py-2 bg-green-700 m-5 rounded active:scale-95 active:bg-green-600'>Return Home</button>

      <button
        onClick={()=>{
          console.log("click");
          navigate(-1)
        }}
        className='px-5 py-2 bg-green-700 m-5 rounded active:scale-95 active:bg-green-600'>Return Previous</button>

      <button
        onClick={()=>{
          console.log("click");
          navigate(+1)
        }}
        className='px-5 py-2 bg-green-700 m-5 rounded active:scale-95 active:bg-green-600'>Return Next</button>

    </div>
  )
}

export default Buttons