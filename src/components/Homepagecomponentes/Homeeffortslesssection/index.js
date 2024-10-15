import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import "./Effortssection.scss"
import { Link } from 'react-router-dom'
import Growicon from './../../../assets/svg/Growicon';

// MP4 videos
import Featurevideo1 from "../../../assets/video/feature-video1.mp4"
import Featurevideo2 from "../../../assets/video/feature-video2.mp4"
import Featurevideo3 from "../../../assets/video/feature-video3.mp4"
import Featurevideo4 from "../../../assets/video/feature-video4.mp4"

// WebM videos
import Featurevideow1 from "../../../assets/video/feature-video1.webm"
import Featurevideow2 from "../../../assets/video/feature-video2.webm"
import Featurevideow3 from "../../../assets/video/feature-video3.webm"
import Featurevideow4 from "../../../assets/video/feature-video4.webm"

gsap.registerPlugin(ScrollTrigger)

export default function Homeffortssection() {
    const sliderRef = useRef(null)
    const containerRef = useRef(null)
    const contentRef = useRef(null)
    const cardsRef = useRef([])

    useEffect(() => {
        const slider = sliderRef.current
        const container = containerRef.current
        const content = contentRef.current

        // Content animation
        gsap.fromTo(content.children,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: content,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        )

        // Horizontal scroll animation
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                pin: true,
                start: "30% top",
                end: () => `+=${slider.scrollWidth - window.innerWidth}`,
                scrub: 1,
                anticipatePin: 1,
            }
        })

        tl.to(slider, {
            x: () => -(slider.scrollWidth - window.innerWidth),
            ease: "none",
        })

        // Cards animation
        cardsRef.current.forEach((card, index) => {
            gsap.fromTo(card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse",
                    }
                }
            )
        })

        return () => {
            tl.kill()
            ScrollTrigger.getAll().forEach(st => st.kill())
        }
    }, [])

    return (
        <div className='home-efforts-section-main' ref={containerRef}>
            <div className='container2'>
                <div className='home-efforts-content' ref={contentRef}>
                    <span>[006. For developers]</span>
                    <h2>Effortless Integration</h2>
                    <p>Embed the Passkeys wallet on your platform with just a few lines of code.</p>
                </div>
            </div>
            <div className='container3'>
                <div className='home-efforts-section-slider-main-alignment'>
                    <div className='home-efforts-section-slider-main' ref={sliderRef}>
                        <Link to={"/"}>
                            <div className='home-efforts-card-main' ref={el => cardsRef.current[0] = el}>
                                <div className='home-efforts-card-image'>
                                    <video autoPlay loop muted playsInline preload="auto">
                                        <source src={Featurevideo1} type="video/mp4" />
                                        <source src={Featurevideow1} type="video/webm" />
                                    </video>
                                </div>
                                <div>
                                    <h3>Quick Integration</h3>
                                </div>
                                <div>
                                    <p>Leverage compatibility with existing libraries like Wagmi or Solana Wallet Adapter for a smooth, drop-in integration.</p>
                                </div>
                                <Link to={"/"} className='learn-more-button'>learn more <Growicon /></Link>
                            </div>
                        </Link>
                        <Link to={"/"}>
                            <div className='home-efforts-card-main' ref={el => cardsRef.current[1] = el}>
                                <div className='home-efforts-card-image'>
                                    <video autoPlay loop muted playsInline preload="auto">
                                        <source src={Featurevideo2} type="video/mp4" />
                                        <source src={Featurevideow2} type="video/webm" />
                                    </video>
                                </div>
                                <div>
                                    <h3>Security Powered by MPC</h3>
                                </div>
                                <div>
                                    <p>Multi-party computation ensures user safety with features like spending limits, while maintaining self-custody.</p>
                                </div>
                                <Link to={"/"} className='learn-more-button'>learn more <Growicon /></Link>
                            </div>
                        </Link>
                        <Link to={"/"}>
                            <div className='home-efforts-card-main' ref={el => cardsRef.current[2] = el}>
                                <div className='home-efforts-card-image'>
                                    <video autoPlay loop muted playsInline preload="auto">
                                        <source src={Featurevideo3} type="video/mp4" />
                                        <source src={Featurevideow3} type="video/webm" />
                                    </video>
                                </div>
                                <div>
                                    <h3>Custom Themes</h3>
                                </div>
                                <div>
                                    <p>Choose colors and defaults, and make the Passkeys wallet blend seamlessly with your platform.</p>
                                </div>
                                <Link to={"/"} className='learn-more-button'>learn more <Growicon /></Link>
                            </div>
                        </Link>
                        <Link to={"/"}>
                            <div className='home-efforts-card-main' ref={el => cardsRef.current[3] = el}>
                                <div className='home-efforts-card-image'>
                                    <video autoPlay loop muted playsInline preload="auto">
                                        <source src={Featurevideo4} type="video/mp4" />
                                        <source src={Featurevideow4} type="video/webm" />
                                    </video>
                                </div>
                                <div>
                                    <h3>Multichain Support</h3>
                                </div>
                                <div>
                                    <p>Bitcoin, Ethereum, Polygon, Solana, Arbitrum One, Avalanche, Base, BNB Chain, Mantle and Optimism.</p>
                                </div>
                                <Link to={"/"} className='learn-more-button'>learn more <Growicon /></Link>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}