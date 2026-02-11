import React from 'react';
import UseReff from './Components/React_Fundamental/Hooks_Learning/UseReff';
import UseEffectt from './Components/React_Fundamental/Hooks_Learning/UseEffectt';
import Navbar, { ThemeProvider } from './Components/React_Fundamental/Hooks_Learning/useContextt';

 const App =()=> {
  return (
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  )
}
export default App;