import React, { useState, useEffect, useRef } from 'react'
import "./header.scss"
import Logo from '../../assets/svg/logo'
import { NavLink, useLocation } from 'react-router-dom'
import ScrolledLogo from '../../assets/svg/scrolledlogo'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Header() {
  const [activeSwitch, setActiveSwitch] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const observerRef = useRef(null)
  const svgRef = useRef(null)
  const location = useLocation()

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

  useEffect(() => {
    if (svgRef.current) {
      gsap.set(svgRef.current, { autoAlpha: 0 });

      ScrollTrigger.create({
        trigger: "body",
        start: "top -400",
        end: "bottom top",
        onEnter: () => gsap.to(svgRef.current, { autoAlpha: 1, duration: 0.3 }),
        onLeaveBack: () => gsap.to(svgRef.current, { autoAlpha: 0, duration: 0.3 }),
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: "#wrap",
          pin: false,
          scrub: 0.2,
          start: 'top top',
          end: '+=10000',
        }
      })
        .to(svgRef.current, {
          rotation: 360 * 5,
          duration: 1,
          ease: 'none',
          transformOrigin: "center center",
        })
    }
  }, [])

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    window.location.href = path;
  }

  return (
    <header>
      <div className='header-container'>
        <div className='header-alignment'>
          <div className='header-logo'>
            <a href="/" onClick={(e) => handleLinkClick(e, '/')}>
              <div className={`logo-container ${scrolled ? 'scrolled' : ''}`}>
                <div className="default-logo">
                  <Logo />
                </div>
                <div className="scrolled-logo" id='wrap'>
                  <div id='svg' ref={svgRef}>
                    <ScrolledLogo />
                  </div>
                </div>
              </div>
            </a>
          </div>
          {location.pathname !== '/playground' && (
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
          )}
          <div className='header-links'>
            <a href="/developer" onClick={(e) => handleLinkClick(e, '/developer')}>developer docs</a>
            <a href="/playground" onClick={(e) => handleLinkClick(e, '/playground')}>playground</a>
            <button type='button'>Get Access</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header