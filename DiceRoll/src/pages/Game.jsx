import React from 'react'
import style from './Game.module.css'
import TotalScore from '../Component/TotalScore';
import NumberSelector from '../Component/NumberSelector';
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
    <main>
    <TotalScore />
    <NumberSelector />
    </main>
    </div>
    </>
  )
}

export default Game
