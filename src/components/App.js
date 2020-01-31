import React from 'react'
import { Router } from '@reach/router'

import Home from './Home'
import About from './About'

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
