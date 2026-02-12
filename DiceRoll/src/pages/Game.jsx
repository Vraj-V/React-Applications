import React,{useState} from 'react'
import style from './Game.module.css'
import TotalScore from '../Component/TotalScore';
import NumberSelector from '../Component/NumberSelector';
import RollDice from '../Component/RollDice';
import Rules from '../Component/Rules';
const Game = ({flag, setFlag}) => {

        const [selectedNumber, setSelectedNumber] = useState(0);
        const [currentDice,setCurrentDice] = useState(1)
        const [totalScore, setTotalScore] = useState(0);
        const [Error, setError] = useState('');
        const [showRules, setShowRules] = useState(false);

  console.log(flag);
  const returnHome = () => {
    console.log("Returning to Home Screen");
    setFlag(true);
  }
  
  // Rolling dice
  const generateRandomNumber = (min,max) => {
        return Math.floor(Math.random()*(max - min) +min);
    };

    const rollingDice =()=>{
              if(!selectedNumber) {
                setError("You have not selected any number");
                return;
              };
              setError('');

        const randomNumber = generateRandomNumber(1,7);
        setCurrentDice((prev) => randomNumber);

        if(selectedNumber === randomNumber){
          setTotalScore(prev => prev + randomNumber);
        }else{
          setTotalScore(prev => prev - 2)
        }
        setSelectedNumber(undefined)
    }
  
  // Resetting the game
  const resetGame = () => {
    setTotalScore(0);
  }
  return (
    <>
    <div className={style.main}>
    <div className={style.container}>
      <button onClick={returnHome} className={style.playbutton}>X</button>
    </div>
    <main className={style.Main}>
    <TotalScore totalScore={totalScore} />
    <NumberSelector Error={Error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber ={setSelectedNumber}/>
    </main>
    <RollDice  currentDice ={currentDice} rollingDice={rollingDice} />
    <div className={style.btns}>
        <button className={style.reset} onClick={resetGame}>Reset</button>
        <button onClick={() => setShowRules(!showRules)}>How to Play </button>
    </div>
    {showRules && <div className={style.rules}>
      <Rules />
    </div>
    }

    </div>
    </>
  )
}

export default Game
