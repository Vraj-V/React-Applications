import Fetch from "./Component/FetchAPI"
import FetchAwt from "./Component/FetchAwait"
import Axios from "./Component/Axios"
import Axioss from "./Component/Axioss"
const App = () => {

  const getData = async ()=>{
    console.log("From App")
  }

  
  return (
    <div>
      <Fetch onClick={getData}/>
      <FetchAwt />
      <Axioss />
      <Axios />
    </div>
  )
}

export default App