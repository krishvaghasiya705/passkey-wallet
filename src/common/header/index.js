import React, { useState, useEffect, useRef } from "react";
import "./header.scss";
import Logo from "../../assets/svg/logo";
import { NavLink, useLocation } from "react-router-dom";
import ScrolledLogo from "../../assets/svg/scrolledlogo";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Passkeydevelopericon from "../../assets/svg/Passkeydevelopericon";

gsap.registerPlugin(ScrollTrigger);

function Header() {
  const [activeSwitch, setActiveSwitch] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef(null);
  const svgRef = useRef(null);
  const headerRef = useRef(null);
  const location = useLocation();

  const handleSwitchClick = (type) => {
    setActiveSwitch(type);
    const section = document.querySelector(`.${type}-section`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 400;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("users-section")) {
            setActiveSwitch("users");
          } else if (entry.target.classList.contains("devs-section")) {
            setActiveSwitch("devs");
          }
        } else {
          if (
            (entry.target.classList.contains("users-section") &&
              activeSwitch === "users") ||
            (entry.target.classList.contains("devs-section") &&
              activeSwitch === "devs")
          ) {
            setActiveSwitch(null);
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    });

    const usersSection = document.querySelector(".users-section");
    const devsSection = document.querySelector(".devs-section");

    if (usersSection) observerRef.current.observe(usersSection);
    if (devsSection) observerRef.current.observe(devsSection);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [scrolled, activeSwitch]);

  useEffect(() => {
    if (svgRef.current) {
      gsap.set(svgRef.current, { autoAlpha: 0, scale: 0.5 });

      ScrollTrigger.create({
        trigger: "body",
        start: "top -200",
        end: "bottom top",
        onEnter: () =>
          gsap.to(svgRef.current, {
            autoAlpha: 1,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
          }),
        onLeaveBack: () =>
          gsap.to(svgRef.current, {
            autoAlpha: 0,
            scale: 0.5,
            duration: 0.3,
            ease: "power2.in",
          }),
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#wrap",
            pin: false,
            scrub: 0.5,
            start: "top top",
            end: "+=10000",
          },
        })
        .to(svgRef.current, {
          rotation: 360 * 5,
          duration: 1,
          ease: "power1.inOut",
          transformOrigin: "center center",
        });
    }
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      gsap.set(headerRef.current, { y: -100, opacity: 0 });
      gsap.to(headerRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "elastic.out(1, 0.8)",
        delay: 0.2,
      });
    }
  }, []);

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      window.location.href = path;
    }, 1000);
  };

  return (
    <>
      {location.pathname !== "/developer" && (
        <header
          ref={headerRef}
          style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}
        >
          <div className="header-container">
            <div className="header-alignment">
              <div className="header-logo">
                <NavLink to={"/"} onClick={(e) => handleLinkClick(e, "/")}>
                  <div
                    className={`logo-container ${scrolled ? "scrolled" : ""}`}
                  >
                    <div className="default-logo">
                      <Logo />
                    </div>
                    <div className="scrolled-logo" id="wrap">
                      <div id="svg" ref={svgRef}>
                        <ScrolledLogo />
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
              {location.pathname !== "/playground" && (
                <div className="header-centered-switch">
                  <div
                    className={`header-centered-switch-button ${
                      activeSwitch === "users" ? "active" : ""
                    }`}
                    onClick={() => handleSwitchClick("users")}
                  >
                    <span>for users</span>
                  </div>
                  <div
                    className={`header-centered-switch-button ${
                      activeSwitch === "devs" ? "active" : ""
                    }`}
                    onClick={() => handleSwitchClick("devs")}
                  >
                    <span>for devs</span>
                  </div>
                  <div
                    className="slider"
                    style={{
                      transform: `translateX(${
                        activeSwitch === "devs"
                          ? "100%"
                          : activeSwitch === "users"
                          ? "0"
                          : "-120%"
                      })`,
                    }}
                  ></div>
                </div>
              )}
              <div className="header-links">
                <NavLink
                  to={"/developer"}
                  onClick={(e) => handleLinkClick(e, "/developer")}
                >
                  developer docs
                </NavLink>
                <NavLink
                  to={"/playground"}
                  onClick={(e) => handleLinkClick(e, "/playground")}
                >
                  playground
                </NavLink>
                <button type="button">Get Access</button>
              </div>
            </div>
          </div>
        </header>
      )}

      {location.pathname === "/developer" && (
        <header
          className="dev-header"
          ref={headerRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            borderBottom: "1px solid #e0e0e0",
            background: "#fff",
          }}
        >
          <div className="header-container">
            <div className="header-alignment">
              <div className="header-logo">
                <NavLink to={"/"} onClick={(e) => handleLinkClick(e, "/")}>
                  <div className="dev-logo-main">
                    <Passkeydevelopericon />
                  </div>
                </NavLink>
              </div>
              <div className="dev-last-content">
                <div className="dev-header-links">
                  <NavLink
                    to={"/developer"}
                    onClick={(e) => handleLinkClick(e, "/developer")}
                  >
                    developer docs
                  </NavLink>
                  <NavLink
                    to={"/playground"}
                    onClick={(e) => handleLinkClick(e, "/playground")}
                  >
                    playground
                  </NavLink>
                </div>
                <div className="dev-header-search-bar">
                  <input type="text" placeholder="Search documentation…" />
                  <kbd>CTRL K</kbd>
                </div>
                <a href="https://github.com/krishvaghasiya705" target="__blank">
                  <div className="github-icon">
                    <svg
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="3 3 18 18"
                    >
                      <title>GitHub</title>
                      <path d="M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z"></path>
                    </svg>
                  </div>
                </a>
              </div>
              {/*<-------------------------- Such more content -------------------------->*/}
            </div>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
