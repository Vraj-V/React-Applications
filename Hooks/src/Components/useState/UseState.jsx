import React,{useState} from 'react'
// import useState before using
const UseState = () => {
    const [count, setCount] = useState(0); //single value useState
    const [state, setState] = useState({   //Multie value change in useState
        firstName:'vraj',
        lastName:"valand",
        age:  21
    });
    const someValue =()=>{
        return 10;
    };
    const [user, setUser] = useState(()=>{
        return{
            number:someValue(),
            firstName:'vraj',
            lastName:"valand",
            age:  21
        }
    })              //Multi value change in useState arrow function.

    const increaseCount =()=>{
        setCount(count + 1);
    }
    const decreaseCount =()=>{
        setCount(count - 1);
    }

    
    const jmpBy5 =()=>{
        setCount(count + 5);
    }

    const userChange =()=>{
        setState({
            ...state,
            firstName: "vivek",
            age:23
        })
        
    }
    
  return (
    <div>
        <h3>Using COUNT to change the state value.</h3>
        <p>useState allow you set and change the value of object,variable or anything.</p>
        <h4>{count}</h4>
        
        <h5 className='prev'>{state.firstName + " "+ state.lastName + " " + state.age }</h5>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={jmpBy5}>Jump  by 5</button>
        <button onClick={userChange}>Change User</button>

    </div>
  )
}

export default UseState