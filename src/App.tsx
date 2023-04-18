import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {Routes , Route } from 'react-router-dom'

import About from './pages/About'
import Main from './pages/Main'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Passo a passo</h1>
      <Routes>
        <Route path='/' element={ <Main/> } />
        <Route path='/about' element={ <About/> } />
      </Routes>
    </div>
  )
}

export default App
