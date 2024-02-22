import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from '../widgets/sidebar/Sidebar'

import Home from '../pages/HomePage';
import EnergySystem from '../pages/EnergySystemPage';
import AtmosferSystem from '../pages/AtmosferSystemPage';


const App: React.FC = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />            
          <Route path='/energysystempage' element={<EnergySystem />} />    
          <Route path='/atmosfersystempage' element={<AtmosferSystem />} />
        </Routes>
      </Router> 
    </>
  )
}

export default App
