import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Slideshow from './components/Slideshow'

import one from '/public/1.png'
import two from '/public/2.png'
import three from '/public/3.png'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './Section6'
import University from './components/University'
import Footer from './components/Footer'

const images = [
  one,
  two,
  three
]

function App() {
  const [curserPosition, setCurserPosition] = useState({x: 0, y: 0})

  const updateMousePosition = {}
  useEffect(() => {
    
  }, [])
  
  
  return (
    <>
    <Header/>
    <Slideshow images={images}  />
    <Section1/>
    <div className='h-2 bg-slate-100'/>
    <Section2/>
    <div className='h-2 bg-slate-100'/>
    <Section3/>
    <div className='h-2 bg-slate-100'/>
    <Section4/>
    <div className='h-2 bg-slate-100'/>
    <Section5/>
    <div className='h-2 bg-slate-100'/>
    <Section6/>
    <div className='h-2 bg-slate-100'/>
    <University/>
    <div className='h-2 bg-slate-100'/>
    <Footer/>
    </>
  )
}

export default App