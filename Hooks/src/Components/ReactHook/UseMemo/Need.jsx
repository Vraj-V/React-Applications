    import React,{useState} from 'react'
import { useMemo } from 'react';

    const Need = ({Num}) => {
        const [Count, setCount] = useState(0);

        const increase =() =>{
            setCount(Count + 1);
        }

        const expensiveCal =()=>{
            let tempNum = 0;
            for (let i =0 ; i<=Num; i++){
                tempNum++;
            }
            return tempNum;
        }

        const MemoCal = useMemo(expensiveCal,[Num]);
    return (
        <div>
            <h3> Count : {Count}</h3>
            {/* <h3>Result is {expensiveCal()}</h3> */}
            <h3>Result is {MemoCal()}</h3>

            <button onClick={increase}>Increment!</button>
        </div>
    )
    }

    export default Need