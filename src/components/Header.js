import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import './header.css'

const Header = () => {
  const [dropMenu, setDropMenu] = useState(false)
  const cart = useSelector((state) => state.cart)

  return (
    <div className='nav'>
        <NavLink to='/'>
            <h3 className='logo'>
                <span>Smart</span> Shop
            </h3>
        </NavLink>
        <ul className="nav-links">
            <li>
                <NavLink to='/'>Home</NavLink>
                <div className="underline"></div>
            </li>
            <li>
                <NavLink to='/products/phone'>Phones</NavLink>
                <div className="underline"></div>
            </li>
            <li>
                <NavLink to='/products/laptop'>Laptops</NavLink>
                <div className="underline"></div>
            </li>
            <li>
                <NavLink to='/products/tv'>TVs</NavLink>
                <div className="underline"></div>
            </li>
        </ul>
        <div className="nav-controls">
            <div className="menu-icon" onClick={() => setDropMenu(!dropMenu)}>
                {dropMenu ? <FaTimes /> :<FaBars />}
            </div>
            <Link to='/cart' className="cart-btn">
                <FaShoppingCart/>
                <div to='/cart' className="qty">{cart.length}</div>
            </Link>
        </div>
        <ul className={`drop-links ${dropMenu ? 'active' : ''}`}>
            <li>
                <NavLink to='/'>Home</NavLink>
                <div className="underline"></div>
            </li>
            <li>
                <NavLink to='/products/phone'>Phones</NavLink>
                <div className="underline"></div>
            </li>
            <li>
                <NavLink to='/products/laptop'>Laptops</NavLink>
                <div className="underline"></div>
            </li>
            <li>
                <NavLink to='/products/tv'>TVs</NavLink>
                <div className="underline"></div>
            </li>
        </ul>
    </div>
  )
}

export default Header