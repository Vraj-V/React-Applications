import React from 'react'
import Card from './Component/Card.jsx'
import Header  from './Component/Header/Header.jsx'
import Button from './Component/Button/Button.jsx'
const App = () => {


  return (
  <>
  <div className="parent bg-gray-300 w-full h-screen">

      <Card user= "Vraj" bio ="JSX Developer" img="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"/>
      <Card user="Vivek"bio="React Developer" img="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"/>
      <Card user="Mansi"bio="HTML Developer" img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"/>
      <Header />
      <Button />

      
    </div>
      </>

  )
}

export default App