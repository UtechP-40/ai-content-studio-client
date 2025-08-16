import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='app'>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/login' Component={Login} />
        </Routes>
      </div>
  )
}

export default App
