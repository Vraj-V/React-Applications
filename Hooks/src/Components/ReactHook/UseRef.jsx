import React,{useRef} from 'react'
// useRef is used to access the dom element directly
const UseRef = () => {
    const inputRef = useRef(null);
    const btnRef = useRef(null)
    const focusInput =() =>{
        // console.log(inputRef);
        // console.log(inputRef.current);
        inputRef.current.focus();
        btnRef.current.style.color ='red';
    }
  return (
    <div>
        <input type="text" name="name" id="name" ref={inputRef} />
        <button onClick={focusInput} ref={btnRef}>submit</button>
    </div>
  )
}

export default UseRef