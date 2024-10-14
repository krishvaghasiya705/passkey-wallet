import React, { useEffect, useRef } from "react";
import "./Signoutsection.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Signoutvideo from "../../../assets/video/simple-signup.mp4";
import Signoutvideo2 from "../../../assets/video/simple-signup.webm";
import Trueicon from "../../../assets/svg/Trueicon";

gsap.registerPlugin(ScrollTrigger);

export default function Homesignout() {
    const textRef1 = useRef(null);
    const textRef2 = useRef(null);
    const markerRef1 = useRef(null);
    const markerRef2 = useRef(null);
    const markerRef3 = useRef(null);

    useEffect(() => {
        const splitTextIntoWords = (element) => {
            const words = element.innerText.split(" ");
            element.innerHTML = words
                .map((word) => `<span style="color: #78787840">${word} </span>`)
                .join("");
        };

        splitTextIntoWords(textRef1.current);
        splitTextIntoWords(textRef2.current);

        const revealWords = (element) => {
            const words = element.querySelectorAll("span");
            gsap.to(words, {
                color: "#e3afbe",
                stagger: {
                    each: 1,
                    from: "start",
                },
                scrollTrigger: {
                    trigger: element,
                    start: "top 50%",
                    end: "bottom 50%",
                    scrub: true,
                    toggleActions: "restart none none none",
                },
            });
        };

        revealWords(textRef1.current);
        revealWords(textRef2.current);

        const markers = [markerRef1.current, markerRef2.current, markerRef3.current];
        markers.forEach((marker) => {
            gsap.to(marker.querySelector("p"), {
                color: "#e3afbe",
                duration: 1,
                scrollTrigger: {
                    trigger: marker,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: true,
                },
            });
            gsap.to(marker.querySelector("svg"), {
                fill: "#e3afbe",
                duration: 1,
                scrollTrigger: {
                    trigger: marker,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: true,
                },
            });
        });
    }, []);

    return (
        <div className="home-signout-section-main">
            <div className="container2">
                <div className="home-signout-fl-main">
                    <div className="home-signout-text-main">
                        <span>[001. Simple Signup]</span>
                        <div className="home-signout-text-pera-main">
                            <p ref={textRef1}>Stop new user drop off with just a few lines of code.</p>
                            <p ref={textRef2}>
                                Reduce churn and empower new users to start transacting without
                                leaving your platform.
                            </p>
                        </div>
                        <div className="home-signout-mrkers-div-main">
                            <div className="home-signout-mrkers-div" ref={markerRef1}>
                                <Trueicon />
                                <p>New users create and fund their self-custodial Passkeys wallet directly on your website.</p>
                            </div>
                            <div className="home-signout-mrkers-div" ref={markerRef2}>
                                <Trueicon />
                                <p>No seed phrase, no browser extension, and no email verification required.</p>
                            </div>
                            <div className="home-signout-mrkers-div" ref={markerRef3}>
                                <Trueicon />
                                <p>Authentication through biometrics provides users with a secure, seamless and familiar experience.</p>
                            </div>
                        </div>
                    </div>
                    <div className="home-signout-video-main">
                        <video autoPlay loop muted playsInline preload="auto">
                            <source src={Signoutvideo} type="video/mp4" />
                            <source src={Signoutvideo2} type="video/webm" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
}