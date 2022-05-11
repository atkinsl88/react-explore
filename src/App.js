import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/common/Navbar'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

}

export default App;
