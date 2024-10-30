import React, { useEffect, useRef } from 'react'
import "./homefocussection.scss";
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Devfeaturevideo from "../../../assets/video/dev-features.mp4"

gsap.registerPlugin(ScrollTrigger);

export default function Homefocussection() {
    const sectionRef = useRef(null);
    const videoRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        // Content animation
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
                    // toggleActions: "play none none reverse"  // removed this as we're using scrub
                }
            }
        );

        // Video animation
        gsap.fromTo(videoRef.current,
            {
                y: -500,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 2,
                scrollTrigger: {
                    trigger: videoRef.current,
                    start: "top 80%",
                    end: "top 30%",
                    scrub: 1
                }
            }
        );

    }, []);

    return (
        <div className='home-focus-section-main' ref={sectionRef}>
            <div className='container2'>
                <div className='home-focus-section-content' ref={contentRef}>
                    <span>[005. Free Your Team]</span>
                    <h2>Focus on What Matters Most</h2>
                    <p>Streamline user onboarding with minimal code, freeing your team to build your core product.</p>
                </div>
                <div className='dev-feature-video-main' ref={videoRef}>
                    <video autoPlay loop muted playsInline preload="auto">
                        <source src={Devfeaturevideo} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div >
    )
}
