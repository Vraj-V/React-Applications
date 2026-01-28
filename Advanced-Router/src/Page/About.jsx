import React from 'react'
import {useNavigate} from 'react-router-dom'
import Buttons from '../Component/Buttons';


const About = () => {

let navigate = useNavigate();
  return (
    <div>

    <Buttons />
        <h3>About</h3>
        <div className='text-center'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, aut.
          Voluptatibus officiis quod nemo quia, sequi voluptas quae natus quibusdam quos.</p>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, aut. Voluptatibus officiis quod nemo quia, sequi voluptas quae natus quibusdam quos.</h5>

        </div>
        <button onClick={()=>navigate('/')} className='bg-green-400 text-white px-4 py-2 rounded-md'>Go to Home</button>
    </div>
  )
}

export default About