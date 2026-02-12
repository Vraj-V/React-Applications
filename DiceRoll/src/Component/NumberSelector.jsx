import { useState } from "react";
import styled from "styled-components";

const NumberSelector =()=>{
    const arrNum = [1,2,3,4,5,6];
    const [selectedNumber, setSelectedNumber] = useState(0);
    console.log(selectedNumber);
    return(
        <div>
            {arrNum.map((value,i)=>{
            return <Box 
            isSelected={selectedNumber === value}
            key={i} onClick={()=>setSelectedNumber(value)}>{value}</Box>
            })}
        </div>
    )
}
export default NumberSelector;

const Box = styled.div`
    height: 72px; 
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    background-color: ${(props)=> props.isSelected ? 'black' : 'white'};
    color: ${(props)=> !props.isSelected ? 'black' :'white'};
    &:hover{
        background-color: black;
        color:white;
    }
`