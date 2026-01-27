import React,{useState} from 'react'
import Navbar from './Page/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import About from './Page/About'
import Contact from './Page/Contact'
import NotFoundPage from './Page/NotFoundPage'
import Footer from './Page/Footer'
import Product from './Page/Product'
import Men from './Page/Men'
import Women from './Page/Women'
import Buttons from './Component/Buttons'
import Theme from './Component/Theme'

const App = () => {
  return (
<div className='bg-gray-200  min-h-screen'>
  
    <Navbar />
    <Buttons />
    <Theme />


  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/product' element={<Product />}>
<Route path="/product/men" element={<Men />} />
<Route path="/product/women" element={<Women />} />
    </Route>


    <Route path='*' element={<NotFoundPage />}/>
  </Routes>

    <Footer />
</div>
  )
}

export default App