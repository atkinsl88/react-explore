import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/common/Navbar'
import Home from './components/home/Home'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" component={Home} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
