import React from 'react'
import { Router } from '@reach/router'

import Home from './Home'
import About from './About'
import Blog from './Blog'
import Projects from './Projects'

import '../styles/main.scss'

const App = () => {
  return (
    <div>
      {/*<Navbar />*/}
      <Router>
        <Home path="/" />
        <Blog path="/blog" />
        <About path="/about" />
        <Projects path="/projects" />
      </Router>
    </div>
  )
}

export default App
