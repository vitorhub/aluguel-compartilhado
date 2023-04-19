import './App.css'
//npm install --save react-router-dom
import {Routes , Route } from 'react-router-dom'

import About from './pages/About'
import Main from './pages/Main'

import logo from './assets/share-rent.png'
import Login from './pages/Login'
import Cadastrar from './pages/Cadastrar'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={ <Main/> } />
        <Route path='/about' element={ <About/> } />
        <Route path='/login' element={ <Login/> } />
        <Route path='/cadastrar' element={ <Cadastrar/> } />
      </Routes>
    </div>
  )
}

export default App
