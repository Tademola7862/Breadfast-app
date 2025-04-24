import React from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Categories from './components/Categories'
import Catalogue from './components/Catalogue'
import Tourists from './components/Tourists'
import Places from './components/Places'
function App() {
  

  return (
    <>
     <Navbar />
     <Herosection />
     <Categories />
     <Catalogue />
     <Tourists />
     <Places />

    </>
  )
}

export default App
