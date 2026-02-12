import { useState } from "react";
import styled from "styled-components";

const NumberSelector =({selectedNumber,setSelectedNumber,Error,setError})=>{
    const arrNum = [1,2,3,4,5,6];
    console.log(selectedNumber);

    const numberSelect =(value)=>{
        setSelectedNumber(value);
        setError('');
    }
    
    return(
        <NumberContainer>
            <h5 className="error">{Error}</h5>
            <div className="flex">
            {arrNum.map((value,i)=>{
            return <Box 
            isSelected={selectedNumber === value}
            key={i} onClick={()=>numberSelect(value)}>{value}</Box>
            })}
        </div>
            <p>Selected Number: {selectedNumber}</p>
</NumberContainer>
    )
}
export default NumberSelector;

const NumberContainer = styled.div`
    .flex{
    display: flex;
    gap:24px;
    margin-bottom: 24px;
    }
    p{
    font-size: 24px;
    font-weight: 700;
    text-align: end;
    }
    .error{
    color: red;
    font-size: 18px;
    font-weight: 500;
    text-align: end;
    margin-bottom: 12px;
    }
    `

const Box = styled.div`
    height: 52px; 
    width: 52px;
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