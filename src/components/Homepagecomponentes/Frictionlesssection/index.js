import React, { useEffect, useRef } from 'react'
import "./frictionlesssection.scss"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Rockimage from '../../../assets/image/rock-poster.png'

import Frictionlessvideo from "../../../assets/video/frictionless.mp4";
import Frictionlessvideo2 from "../../../assets/video/frictionless.webm";
import Tybutton from '../../buttons/trybutton'

gsap.registerPlugin(ScrollTrigger);

export default function Frictionlesssection() {
    const videoRef = useRef(null);
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const paragraphRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "center 30%",
                scrub: 1, // Makes the animation follow scroll position
                toggleActions: "play none none reverse"
            }
        });

        // Video animation
        timeline.fromTo(videoRef.current,
            { x: '100%', opacity: 0 },
            { x: '0%', opacity: 1 }
        );

        // Title animation
        timeline.fromTo(titleRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1 },
            "<+=0.1" // Slight delay after previous animation
        );

        // Subtitle animation
        timeline.fromTo(subtitleRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1 },
            "<+=0.1"
        );

        // Paragraph animation
        timeline.fromTo(paragraphRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1 },
            "<+=0.1"
        );

        // Button animation
        timeline.fromTo(buttonRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1 },
            "<+=0.1"
        );
    }, []);

    return (
        <div className='frictionless-section-main' ref={sectionRef}>
            <div className='frictionless-section-background-image'>
                <img src={Rockimage} alt="Rockimage" />
            </div>
            <div className='container2'>
                <div className='frictionlesssection-content-main'>
                    <div className='frictionlesssection-title-div'>
                        <span ref={titleRef}>[002. Funding]</span>
                        <h2 ref={subtitleRef}>Frictionless Funding</h2>
                        <p ref={paragraphRef}>Enable new users to purchase crypto directly within an embedded wallet on your platform, ensuring higher user retention.</p>
                        <div className='card-image-div'>
                            <div ref={buttonRef}>
                                <Tybutton />
                            </div>
                            <div className='frictionless-video-div' ref={videoRef}>
                                <video autoPlay loop muted playsInline preload="auto">
                                    <source src={Frictionlessvideo} type="video/mp4" />
                                    <source src={Frictionlessvideo2} type="video/webm" />
                                </video>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
