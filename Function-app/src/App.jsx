import React from 'react'
import './App.css'
import Input from './Components/Input';
import Counter from './Components/Counter';
const App = () => {

  function Click(value){
    console.log(value);
  }


  function scrolling(){
    console.log("scrolling")
  }
  return (
    <div>
        {/* <input type="text" placeholder='Enter Name' onChange={function(e){
        Click(e.target.value)
        // console.log(e.target.value)
        }}/> */}


{/* OnMouseMove Moment */}
        {/* <div className='box' onMouseMove={function(e){
          // console.log(e.clientX + " " +e.clientY);
          Click(e.clientX)
        }}
        ></div> */}
    
{/*     
    <div onWheel={(e)=>{
      // scrolling()
      console.log(e.pageX);
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
    */}

    {/* <Counter /> */}
    <Input />
    </div>

  )
}

export default App