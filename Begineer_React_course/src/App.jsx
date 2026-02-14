import React from 'react';
import UseReff from './Components/React_Fundamental/Hooks_Learning/UseReff';
import UseEffectt from './Components/React_Fundamental/Hooks_Learning/UseEffectt';
import Navbar, { ThemeProvider } from './Components/React_Fundamental/Hooks_Learning/useContextt';
import Counter from './Components/React_Fundamental/Hooks_Learning/Counter';
import Render from './Components/React_Fundamental/Hooks_Learning/ReactMemo/Render';
import UseCallback from './Components/React_Fundamental/Hooks_Learning/UseCallback';

 const App =()=> {
  return (
    // <ThemeProvider>
    //   <Navbar />
    // </ThemeProvider>
    <div>
      {/* <Counter /> */}
      {/* <Render /> */}
      <UseCallback />
    </div>
  )
}
export default App;