import React from 'react'
import UseState from './Components/ReactHook/UseState'
import UseEffect from './Components/ReactHook/UseEffect'
import UseRef from './Components/ReactHook/UseRef'
import UseRef2 from './Components/ReactHook/UseRef2'
import UseContext from './Components/ReactHook/UseContext/UseContext'
import LevelOne from './Components/ReactHook/UseContext/UsingContext/LevelOne'
import Memo from './Components/ReactMemo/Memo'
import Parent from './Components/ReactHook/UseCallback/Parent'
import UseCallbacks from './Components/ReactHook/UseCallback/UseCallbacks'
import UseMemo from './Components/ReactHook/UseMemo/UseMemo'

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

      <br />
      <hr />
      <div>
        <Memo />
      </div>


      <br />
      <hr />
      <div>
        <h3>Without Call back</h3>
        <Parent />

        <hr />
        <br />
        <h3>With callback</h3>
        <UseCallbacks />
      </div>
    <br />

      {/* useMemo */}
      <div>
        <h2>useMemo calling</h2>
        <UseMemo />
      </div>
    </div>
  )
}

export default App