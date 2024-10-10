import React from 'react'
import "./footer.scss"
import { Link } from 'react-router-dom'
import Growicon from '../../assets/svg/Growicon'
import Footerlogo from '../../assets/svg/footerlogo'

export default function Footer() {
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
              <Link to={"/"}>
                <button>get access <Growicon /></button>
              </Link>
              <Link to={"/"}>
                <button>try our demo <Growicon /></button>
              </Link>
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
                  <Link to={"/"}>Developer Docs</Link>
                  <Link to={"/"}>Terms of Service</Link>
                  <Link to={"/"}>Privacy Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
