import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// PAGES 
import Home from './pages/Home'
import About from './pages/About'
import LodgingPage from './pages/LodgingPage'

// COMPONENTS
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/:id" element={<LodgingPage />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)