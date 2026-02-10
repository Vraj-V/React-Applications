import React from 'react'
import style from './Home.module.css'
const Home = ({handleClick, flag}) => {
  console.log(flag);
  
  return (
    <div className={style.container}>
        <div>
            <img src="/Diceimg.png" alt="Dice" />

        </div>
        <div>

        <h1 className={style.title}>Dice Roll</h1>
        <button className={style.playButton} onClick={handleClick}>Play</button>
        </div>
    </div>
  )
}

export default Home
