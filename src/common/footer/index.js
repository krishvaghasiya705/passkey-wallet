import React, { useEffect, useRef } from 'react'
import "./footer.scss"
import { NavLink, useLocation } from 'react-router-dom'
import Growicon from '../../assets/svg/Growicon'
import Footerlogo from '../../assets/svg/footerlogo'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Footer() {
  const location = useLocation();
  const footerRef = useRef(null);
  const contentRef = useRef(null);
  const footerLogoRef = useRef(null);
  const footerLastContentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(footerRef.current,
      { 
        y: 100, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        }
      }
    );

    // Content animation
    if (contentRef.current && contentRef.current.children) {
      gsap.fromTo(contentRef.current.children,
        { 
          y: 100, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 2,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          }
        }
      );
    }

    // Footer logo rotation
    gsap.to(footerLogoRef.current, {
      rotation: "360deg",
      repeat: Infinity,
      ease: "linear",
      duration: 10
    });

    // Footer last content animation
    gsap.to(footerLastContentRef.current, {
      y: "-10px",
      repeat: Infinity,
      ease: "linear",
      duration: 1,
      yoyo: true
    });

  }, []);

  if (location.pathname === '/playground') {
    return null;
  }
  if (location.pathname === '/developer') {
    return null;
  }

  return (
    <footer ref={footerRef}>
      <div className='footer-backgoerund-main'>
        <div className="footer-container">
          <div className='footer-content-main' ref={contentRef}>
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
          <div className='footer-last-content' ref={footerLastContentRef}>
            <div className='footer-last-content-flx'>
              <div className='footer-logo' ref={footerLogoRef}>
                <NavLink to={"/"}><Footerlogo /></NavLink>
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
