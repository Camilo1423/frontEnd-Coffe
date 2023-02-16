import React from 'react'
import { Link } from 'react-router-dom'
import '../css/components/navBar.css'

const NavBar = () => {
  return (
    <header className='navbar'>
      <h2>SOYLOGO</h2>
      <nav>
        <ul>
            <li><Link to="">Inicio</Link></li>
            <li><Link to="menu">Menu</Link></li>
            <li><Link to="domicilios">Domicilios</Link></li>
        </ul>
      </nav>
      <div className="contentIconsFunction">
        <p>X</p>
        <p>B</p>
      </div>
    </header>
  )
}

export default NavBar
