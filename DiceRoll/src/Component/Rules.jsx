import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RuleContainer>
      <h2>Rules of the Game</h2>
      <div className='text'>
        <p>Select a number between 1 and 6.</p>
        <p>Roll the dice and if your selected number matches the dice value, you score points equal to the dice value.</p>
        <p>If your selected number does not match, you lose 2 points.</p>
        <p>Reset the game to start over.</p>
      </div>
    </RuleContainer>
  )
}

export default Rules

const RuleContainer = styled.div`
    background-color: #fbf1f1;
    padding: 20px;

    h2{
        text-align: left;
        margin-top: 20px;
        font-size: 24px;
        font-weight: bold;
    }
        .text{
        margin-top: 14px;
            }

    `