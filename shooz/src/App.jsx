import React from 'react'
import Navbar from './Components/navbar/Navbar'
import Section1 from './Components/section1/Section1'
import Section2 from './Components/section2/Section2'
import Section3 from './Components/section3/Section3'
import Section4 from './Components/section4/Section4'
import Section5 from './Components/section5/Section5'
import Section6 from './Components/section6/Section6'
import Section7 from './Components/section7/Section7'
import Section8 from './Components/section8/Section8'
import Section9 from './Components/section9/Section9'
import Section10 from './Components/section10/Section10'
import Section11 from './Components/section11/Section11'
import Section12 from './Components/section12/Section12'
import Footer from './Components/footer/Footer'

import { Routes,Route } from 'react-router-dom'
import Shop from './pages/Shop'
import Wishlist from './pages/Wishlist'
import Checkout from './pages/Checkout'
import ProDetails from './pages/ProDetails'
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            <Section7/>
            <Section8/>
            <Section9/>
            <Section10/>
            <Section11/>
            <Section12/>
          </>
        }/>

        <Route path='/Shop' element={<Shop/>}/>
        <Route path='/Wishlist' element={<Wishlist/>}/>
        <Route path='/Checkout' element={<Checkout/>}/>
        <Route path='/product/:id' element={<ProDetails/>}/>
        </Routes>
      <Footer/>
      
    </div>
  )
}



export default App
