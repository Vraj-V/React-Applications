import React,{useState} from 'react'
import Home from './pages/Home'
import Game from './pages/Game';


const App = () => {
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    setFlag(true);
  }
  return (
    <div>
      {flag ? <Home handleClick={handleClick} flag={flag} /> : <Game flag={flag} setFlag={setFlag} />}
    </div>
  )
}

export default App
