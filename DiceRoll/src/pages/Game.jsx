import React from 'react'
import style from './Game.module.css'
const Game = ({flag, setFlag}) => {
  console.log(flag);
  const returnHome = () => {
    console.log("Returning to Home Screen");
    setFlag(true);
  }

  return (
    <>
    <div className={style.main}>
    <div className={style.container}>
      <h1>Game Screen</h1>
      <button onClick={returnHome} className={style.playbutton}>X</button>
    </div>
    <div className={style.score}>
      <h1>0</h1>
      <p>Total Score</p>
    </div>
    </div>
    </>
  )
}

export default Game
