import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import "./homeherobanner.scss"

import Rockvideo from '../../../assets/video/rock-video.mp4';
import Exoduslogo from './../../../assets/svg/exoduslogo';
import Growicon from '../../../assets/svg/Growicon';

gsap.registerPlugin(ScrollTrigger);

export default function HomepageHeroBanner() {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const logoRef = useRef(null);
    const contentRef = useRef(null);
    const buttonsRef = useRef(null);
    const videoRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
          .fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
          .fromTo(logoRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.6 }, '-=0.4')
          .fromTo(contentRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.2')
          .fromTo(buttonsRef.current.children, { opacity: 0, y: 10 }, { opacity: 1, y: 0, stagger: 0.2, duration: 0.6 }, '-=0.4');

        // Video zoom and fade effect
        gsap.to(videoRef.current, {
            scale: 1.5,
            opacity: 0,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        });
    }, []);

    return (
        <div className='home-herobanner-main' ref={sectionRef}>
            <video ref={videoRef} autoPlay loop muted playsInline preload="auto">
                <source src={Rockvideo} type='video/mp4' />
            </video>
            <div className='home-herobanner-main'>
                <div className='home-herobanner-content-main'>
                    <div className='container'>
                        <div className='home-herobanner-content'>
                            <div className='home-herobanner-title-div-main'>
                                <div>
                                    <p ref={subtitleRef}>[000. Where It All Starts]</p>
                                    <h1 ref={titleRef}>One-click Web3 onboarding with Passkeys Developer kit</h1>
                                </div>
                                <div className='home-herobanner-exoduslogo-main'>
                                    <span ref={logoRef}>
                                        by
                                        <Exoduslogo />
                                    </span>
                                </div>
                            </div>
                            <div className='home-herobanner-content-two'>
                                <div className='home-herobanner-content-two-pera' ref={contentRef}>
                                    <p>Simplify wallet creation and funding for new web3 users through biometric login</p>
                                </div>
                                <div className='home-herobanner-content-two-button-div-main' ref={buttonsRef}>
                                    <button type='button'>Try our demo<Growicon /></button>
                                    <button type='button'>Developer docs</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='heroabnner-bac-two'></div>
        </div>
    )
}