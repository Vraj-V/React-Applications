import React,{useState} from 'react'
import Home from './Component/Home'
import Game from './Component/Game';


const App = () => {
  const [flag, setFlag] = useState(true);

  const handleClick = () => {
    setFlag(false);
  }
  return (
    <div>
      {flag ? <Home handleClick={handleClick} flag={flag} /> : <Game flag={flag} setFlag={setFlag} />}
    </div>
  )
}

export default App
