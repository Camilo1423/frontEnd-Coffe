import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import DomiciliosPage from './pages/DomiciliosPage.jsx'
import HomePage from './pages/HomePage.jsx'
import MenuPage from './pages/MenuPage.jsx'

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route index path='/*' element={<HomePage /> }/>
          <Route index path='/menu' element={<MenuPage /> }/>
          <Route index path='/domicilios' element={<DomiciliosPage /> }/>
        </Routes>
      </Router>
    </>
  )
}

export default App
