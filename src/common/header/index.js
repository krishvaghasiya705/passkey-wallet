import React, { useState, useEffect, useRef } from 'react'
import "./header.scss"
import Logo from '../../assets/svg/logo'
import { Link } from 'react-router-dom'

function Header() {
  const [activeSwitch, setActiveSwitch] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const observerRef = useRef(null)

  const handleSwitchClick = (type) => {
    setActiveSwitch(type)
    const section = document.querySelector(`.${type}-section`)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 400
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('users-section')) {
            setActiveSwitch('users')
          } else if (entry.target.classList.contains('devs-section')) {
            setActiveSwitch('devs')
          }
        } else {
          if ((entry.target.classList.contains('users-section') && activeSwitch === 'users') ||
              (entry.target.classList.contains('devs-section') && activeSwitch === 'devs')) {
            setActiveSwitch(null)
          }
        }
      })
    }

    observerRef.current = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    })

    const usersSection = document.querySelector('.users-section')
    const devsSection = document.querySelector('.devs-section')

    if (usersSection) observerRef.current.observe(usersSection)
    if (devsSection) observerRef.current.observe(devsSection)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [scrolled, activeSwitch])

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
            <div className='slider' style={{ transform: `translateX(${activeSwitch === 'devs' ? '100%' : activeSwitch === 'users' ? '0' : '-120%'})` }}></div>
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