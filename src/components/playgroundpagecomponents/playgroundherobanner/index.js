import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./playgroundherobanner.scss";

import Astroidbackimage from "../../../assets/image/asteroid.png";
import Playgoundvideo from "../../../assets/video//box-spinning.mp4";
import ScrolledLogo from "../../../assets/svg/scrolledlogo";
import { NavLink } from "react-router-dom";

export default function Playgroundherobanner() {
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const stepsRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    const headingElement = headingRef.current;
    const headingText = headingElement.innerHTML;
    const wrappedText = headingText.replace(/([^<>]+)(?=<p>|$)/g, (text) =>
      text
        .split(" ")
        .map((word) => `<span>${word} </span>`)
        .join("")
    );
    headingElement.innerHTML = wrappedText;
    const headingWords = headingElement.querySelectorAll("span, p");

    tl.fromTo(
      contentRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
      .fromTo(
        imageRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        videoRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        titleRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.5 },
        "-=0.8"
      )
      .fromTo(
        headingWords,
        { opacity: 0 },
        { opacity: 1, stagger: 0.1, duration: 0.5 },
        "-=0.5"
      )
      .fromTo(
        stepsRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(
        ".playground-herobanner-content-second-div-first-div-box-main",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.5 },
        "-=0.5"
      )
      .fromTo(
        ".passkey-button-main",
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 0.8 },
        "-=0.3"
      )
      .to(".passkey-button-main", {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "power1.inOut",
      });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="playground-hero-banner-main">
      <div className="container">
        <div className="playground-herobanner-content-main" ref={contentRef}>
          <div
            className="playground-herobanner-content-first-div"
            ref={titleRef}
          >
            <span>[Limited Availability]</span>
            <h1 ref={headingRef}>
              Experience the future of crypto and claim your <p>unique </p>
              <p>prize</p>
            </h1>
          </div>
          <div className="playground-herobanner-content-second-div">
            <div
              className="playground-herobanner-content-second-div-first-div"
              ref={stepsRef}
            >
              <p>Follow these simple steps:</p>
              <div className="playground-herobanner-content-second-div-first-div-boxes-main">
                <div className="playground-herobanner-content-second-div-first-div-box-main">
                  <div className="playground-herobanner-content-second-div-first-div-box">
                    <span>[1] Connect your Passkey</span>
                    <div className="checkbox"></div>
                  </div>
                </div>
                <div className="playground-herobanner-content-second-div-first-div-box-main">
                  <div className="playground-herobanner-content-second-div-first-div-box">
                    <span>[2] Open the box</span>
                    <div className="checkbox"></div>
                  </div>
                </div>
                <div className="playground-herobanner-content-second-div-first-div-box-main">
                  <div className="playground-herobanner-content-second-div-first-div-box">
                    <span>[3] Claim your prize</span>
                    <div className="checkbox"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="passkey-button-main">
              <NavLink to={"/playground"}>
                <button type="button">
                  <div className="passkey-button-main-scrolledlogo">
                    <ScrolledLogo />
                  </div>
                  <span>Connect Passkey</span>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="playground-herobanner-back-image" ref={imageRef}>
        <img src={Astroidbackimage} alt="Astroidbackimage" />
      </div>
      <div className="playground-herobanner-back-video" ref={videoRef}>
        <video autoPlay loop muted playsInline preload="auto">
          <source src={Playgoundvideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
