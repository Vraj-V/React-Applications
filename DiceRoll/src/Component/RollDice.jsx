import React, { useState } from "react";
import styled from "styled-components";

const RollDice = ({currentDice,rollingDice}) => {

    
    
    return (
        <DiceContainer>
        <div className="dice" onClick={rollingDice}>
            <img src={`/images/Dice/dice_${currentDice}.jpg`} alt="Dice 1" />
        </div>
        <p>Click on Dice to Roll</p>
        </DiceContainer>
    )
}
export default RollDice;

const DiceContainer = styled.div`
display: flex;
margin-top: 54px;
justify-content: center;
flex-direction: column;
align-items: center;
cursor: pointer;
p{
    font-size: 24px;
    font-weight: 500;
    }
`