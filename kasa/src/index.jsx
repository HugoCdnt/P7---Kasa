import React from 'react'
// import ReactDOM from 'react-dom'

import {createRoot} from 'react-dom/client'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// PAGES 
import Home from './pages/Home'
import About from './pages/About'
import LodgingPage from './pages/LodgingPage'

// COMPONENTS
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
// import { Navigate } from 'react-router-dom'

// STYLES

const container = document.getElementById('root')
const root = createRoot(container)

// ReactDOM.render(
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/:id" element={<LodgingPage />}/>
        {/* <Route path="*" element={<NotFound />}/> */}
        <Route path="notfound" element={<NotFound />}/>
        {/* {/* <Route path="notfound" element={<NotFound/>}/> */}
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
  // document.getElementById('root')
)