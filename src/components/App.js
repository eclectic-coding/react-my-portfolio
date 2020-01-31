import React from 'react'
import { Router, Link } from '@reach/router'

import Home from './Home'
import About from './About'
import Navbar from './Navbar/Navbar'

const App = () => {
  return (
    <div>
      {/*<Navbar />*/}
      <Router>
        <Home path="/" />
        <About path="/about" />
      </Router>
    </div>
  )
}

export default App
