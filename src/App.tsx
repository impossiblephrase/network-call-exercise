import './App.css'
import Home from './components/home'
import Navbar from './components/navbar'
import { Route, Routes } from 'react-router-dom'
import Register from './components/register'

function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="" element={<Home/>} />
          <Route path="register" element={<Register/>} />
        </Routes>
    </>
  )
}

export default App
