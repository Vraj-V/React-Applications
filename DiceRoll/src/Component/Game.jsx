import React from 'react'
import style from './Game.module.css'
const Game = ({flag, setFlag}) => {
  console.log(flag);
  const returnHome = () => {
    console.log("Returning to Home Screen");
    setFlag(true);
  }

  return (
    <div className={style.container}>
      <h1>Game Screen</h1>
      <button onClick={returnHome} className={style.playbutton}>X</button>
    </div>
  )
}

export default Game
