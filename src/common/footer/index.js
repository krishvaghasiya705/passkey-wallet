import React from 'react'
import "./footer.scss"
import { NavLink, useLocation } from 'react-router-dom'
import Growicon from '../../assets/svg/Growicon'
import Footerlogo from '../../assets/svg/footerlogo'

export default function Footer() {
  const location = useLocation();

  if (location.pathname === '/playground') {
    return null;
  }

  return (
    <footer>
      <div className='footer-backgoerund-main'>
        <div className="footer-container">
          <div className='footer-content-main'>
            <div>
              <h1>Embrace the future of crypto with the Passkeys Developer Kit.</h1>
              <p>Start now or try our demo to experience how Passkeys can help you reduce drop-off and unlock new revenue streams.</p>
            </div>
            <div className='footer-buttons-div'>
              <NavLink to={"/"}>
                <button>get access <Growicon /></button>
              </NavLink>
              <NavLink to={"/"}>
                <button>try our demo <Growicon /></button>
              </NavLink>
            </div>
          </div>
          <div className='footer-last-content'>
            <div className='footer-last-content-flx'>
              <div className='footer-logo'>
                <Footerlogo />
              </div>
              <div className='footer-last-content-pera-main'>
                <span>©2024 Exodus Movement, Inc.</span>
                <div className='footer-last-content-pera-main-links'>
                  <NavLink to={"/"}>Developer Docs</NavLink>
                  <NavLink to={"/"}>Terms of Service</NavLink>
                  <NavLink to={"/"}>Privacy Policy</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
