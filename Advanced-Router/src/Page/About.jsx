import React from 'react'
import {useNavigate} from 'react-router-dom'
import Buttons from '../Component/Buttons';


const About = () => {

let navigate = useNavigate();
  return (
    <div>

    <Buttons />



        <h3>About</h3>
    </div>
  )
}

export default About