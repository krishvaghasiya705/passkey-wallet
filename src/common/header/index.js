import React, { useState, useEffect } from 'react'
import "./header.scss"
import Logo from '../../assets/svg/logo'
import { Link } from 'react-router-dom'

function Header() {
  const [activeSwitch, setActiveSwitch] = useState('users')
  const [scrolled, setScrolled] = useState(false)

  const handleSwitchClick = (type) => {
    setActiveSwitch(type)
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 400
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }

      // Check if user has scrolled to the users section (Signout section)
      const usersSection = document.querySelector('.home-signout-section-main')
      // Add a new selector for the devs section (you may need to adjust this based on your actual markup)
      const devsSection = document.querySelector('.devs-section')

      if (usersSection && devsSection) {
        const usersSectionRect = usersSection.getBoundingClientRect()
        const devsSectionRect = devsSection.getBoundingClientRect()

        if (usersSectionRect.top <= window.innerHeight && usersSectionRect.bottom >= 0) {
          setActiveSwitch('users')
        } else if (devsSectionRect.top <= window.innerHeight && devsSectionRect.bottom >= 0) {
          setActiveSwitch('devs')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  return (
    <header>
      <div className='header-container'>
        <div className='header-alignment'>
          <div className='header-logo'>
            <Link to={"/"}>
              <div className={`logo-container ${scrolled ? 'scrolled' : ''}`}>
                <div className="default-logo">
                  <Logo />
                </div>
                <div className="scrolled-logo">
                  <Logo />
                </div>
              </div>
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