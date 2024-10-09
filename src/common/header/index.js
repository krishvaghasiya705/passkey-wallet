import React, { useState } from 'react'
import "./header.scss"
import Logo from '../../assets/svg/logo'
import { Link } from 'react-router-dom'

function Header() {
  const [activeSwitch, setActiveSwitch] = useState('users')

  const handleSwitchClick = (type) => {
    setActiveSwitch(type)
  }

  return (
    <header>
      <div className='header-container'>
        <div className='header-alignment'>
          <div className='header-logo'>
            <Link to={"/"}>
              <Logo />
            </Link>
          </div>
          <div className='header-centered-switch'>
            <div 
              className={`header-centered-switch-button ${activeSwitch === 'users' ? 'active' : ''}`}
              onClick={() => handleSwitchClick('users')}
            >
              <span>for users</span>
            </div>
            <div 
              className={`header-centered-switch-button ${activeSwitch === 'devs' ? 'active' : ''}`}
              onClick={() => handleSwitchClick('devs')}
            >
              <span>for devs</span>
            </div>
            <div className='slider' style={{ transform: `translateX(${activeSwitch === 'devs' ? '100%' : '0'})` }}></div>
          </div>
          <div className='header-links'>
            <Link to={"/"}>developer docs</Link>
            <Link to={"/"}>playground</Link>
            <button type='button'>Get Access</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header