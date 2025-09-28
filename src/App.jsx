import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import StartUp from './pages/StartUp'
import {  Route, Routes } from 'react-router-dom'
import ServiceProfessional from './pages/ServiceProfessional'


function App() {
 

  return (
    <div className='bg-white w-full h-screen  '>
      <Navbar/>
      
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/startup" element={<StartUp />} />
         <Route path="/serviceprofessional" element={<ServiceProfessional/>} />
      </Routes>
    </div>
  )
}

export default App
