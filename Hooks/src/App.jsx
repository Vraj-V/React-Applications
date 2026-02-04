import React from 'react'
import UseState from './Components/useState/UseState'
import UseEffect from './Components/useState/UseEffect'
import UseRef from './Components/useState/UseRef'
import UseRef2 from './Components/useState/UseRef2'
import UseContext from './Components/useState/UseContext/UseContext'
import LevelOne from './Components/useState/UseContext/UsingContext/LevelOne'

const App = () => {
  return (
    <div>
      
      <h1>Learning React Hooks in this.</h1>

      <div>
        <UseState />
      </div>
      <br />
      <hr />
      <div>
        <UseEffect />
      </div>
      
      <br />
      <hr />
      <div>
        <UseRef />
        <UseRef2 />
      </div>

       <br />
      <hr />
      <div>
        <UseContext /> 
        {/* Props driling */}
        {/* <LevelOne /> */}
      </div>
    </div>
  )
}

export default App