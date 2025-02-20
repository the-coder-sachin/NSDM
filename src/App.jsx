import React from 'react'
import Header from './components/Header'
import Slideshow from './components/Slideshow'

import one from '../public/1.png'
import two from '../public/2.png'
import three from '../public/3.png'
import Section1 from './components/Section1'
import Section2 from './components/Section2'

const images = [
  one,
  two,
  three
]

function App() {
  return (
    <>
    <Header/>
    <Slideshow images={images}  />
    <Section1/>
    <div className='h-2 bg-slate-100'/>
    <Section2/>
    <div className='h-2 bg-slate-100'/>
    </>
  )
}

export default App