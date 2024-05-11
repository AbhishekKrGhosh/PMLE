import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Routes  from './Routes'
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
       <Routes></Routes>
       </Router>
    </>
  )
}

export default App
