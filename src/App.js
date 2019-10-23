import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import NASAGallery from './components/NASAGallery/NASAGallery'

import './App.css'


function App() {
  return (
    <div className="App">
      <Header />
      <NASAGallery />
      <Footer />
    </div>
  )
}

export default App