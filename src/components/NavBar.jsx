import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../css/components/navBar.css'

const NavBar = () => {
    const [menuItem, setMenuItem] = useState(false)
    const [topPx, setTopPx] = useState('-300px')
    window.addEventListener('resize', () => window.innerWidth <= 640 ? setMenuItem(true) : setMenuItem(false))
    const visibilyNavBar = () => {
        if(topPx == '-300px') {
            setTopPx('60px')
        } else {
            setTopPx('-300px')
        }
    }

    return (
        <header className='navbar dflex djustify-spacebetween daling-center'>
        <h2>SOYLOGO</h2>
        <nav>
            {!menuItem ? (
                <ul className='dflex'>
                    <li className='mt-10'><Link to="">Inicio</Link></li>
                    <li className='mt-10'><Link to="menu">Menu</Link></li>
                    <li className='mt-10'><Link to="domicilios">Domicilios</Link></li>
                </ul>
            ) : null}
            {menuItem ? (
                <div className="contentMenuToggle menuToggle dflex daling-center djustify-center" style={{top: topPx}}>
                    <ul className='dflex ddirection-column daling-center'>
                        <li className='mt-10 itemBtn'><Link to="">Inicio</Link></li>
                        <li className='mt-10 itemBtn'><Link to="menu">Menu</Link></li>
                        <li className='mt-10 itemBtn'><Link to="domicilios">Domicilios</Link></li>
                    </ul>
                </div>
            ) : null}
        </nav>
        <div className="contentIconsFunction dflex daling-center">
            {menuItem == true ? (<i className='bx bx-menu mt-10 circleIcon' onClick={() => visibilyNavBar()}></i>) : null}
            <i className='bx bxs-cart mt-10 circleIcon'></i>
            <i className='bx bxs-heart mt-10 circleIcon' ></i>
        </div>
        </header>
    )
}

export default NavBar
