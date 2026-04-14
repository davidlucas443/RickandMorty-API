import './App.css'
import { useState } from 'react'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Card } from './components/Card'
import { SectionCharacters } from './components/SectionCharacters'
import { Footer } from './components/Footer'


function App() {

  return (
    <>
     <Header />
     <Main />
     <SectionCharacters/>
     <Footer />
    </>
  )
}

export default App