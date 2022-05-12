import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/common/Navbar'
import Home from './components/home/Home'
import Loremipsum from './components/lorem-ipsum/Loremipsum'
import Proinsodales from './components/proin-sodales/Proinsodales'
import Duistristique from './components/duis-tristique/Duistristique'
import Footer from './components/common/Footer'

// Comments
// Instead of 'Switch' use 'Routes' inside 'BrowserRouter'
// Instead of 'component={home}' use element={<Home />} with 'Route'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home />} /> 
        <Route exact path="/lorem-ipsum" element={<Loremipsum />} />
        <Route exact path="/proin-sodales" element={<Proinsodales />} />
        <Route exact path="/duis-tristique" element={<Duistristique />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );

}

export default App;
