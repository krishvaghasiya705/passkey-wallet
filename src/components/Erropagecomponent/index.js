import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "./erropage.scss";

export default function ErropageCompo() {
    const titleRef = useRef(null);
    const messageRef = useRef(null);
    const backButtonRef = useRef(null);
    const homeButtonRef = useRef(null);
    const cursorRef = useRef(null);
    const cursorBGRef = useRef(null);
    const particlesRef = useRef([]);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(titleRef.current, { y: -100, opacity: 0, rotationX: -90 }, { y: 0, opacity: 1, rotationX: 0, duration: 1.5 })
            .fromTo(messageRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.5")
            .fromTo([backButtonRef.current, homeButtonRef.current],
                { scale: 0, rotation: -180 },
                { scale: 1, rotation: 0, duration: 0.8, stagger: 0.2 })
            .to([backButtonRef.current, homeButtonRef.current],
                { y: -10, repeat: -1, yoyo: true, duration: 0.8, stagger: 0.1 });

        const particlesContainer = document.querySelector('.particles');
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.width = `${Math.random() * 10 + 5}px`;
            particle.style.height = particle.style.width;
            particlesContainer.appendChild(particle);
            particlesRef.current.push(particle);

            gsap.to(particle, {
                y: `random(-100, 100)`,
                x: `random(-100, 100)`,
                rotation: `random(-360, 360)`,
                duration: `random(10, 20)`,
                repeat: -1,
                yoyo: true,
                ease: "none"
            });
        }

        const cursor = cursorRef.current;
        const cursorBG = cursorBGRef.current;

        const moveCursor = (e) => {
            const x = e.clientX;
            const y = e.clientY;

            gsap.to(cursor, {
                x: x,
                y: y,
                duration: 0.1,
                ease: "power2.out"
            });

            gsap.to(cursorBG, {
                x: x,
                y: y,
                duration: 0.15,
                ease: "power2.out"
            });

            particlesRef.current.forEach(particle => {
                const rect = particle.getBoundingClientRect();
                const particleX = rect.left + rect.width / 2;
                const particleY = rect.top + rect.height / 2;
                const distX = particleX - x;
                const distY = particleY - y;
                const distance = Math.sqrt(distX * distX + distY * distY);
                const maxDistance = 100;

                if (distance < maxDistance) {
                    const force = (1 - distance / maxDistance) * 30;
                    gsap.to(particle, {
                        x: `+=${distX / distance * force}`,
                        y: `+=${distY / distance * force}`,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                }
            });
        };

        window.addEventListener('mousemove', moveCursor);

        document.body.style.cursor = 'none';

        const textElements = document.querySelectorAll('.bubble-text');
        textElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                gsap.to(cursor, { scale: 3, backgroundColor: '#e3afbe', duration: 0.3 });
                gsap.to(cursorBG, { scale: 4, backgroundColor: 'rgba(227, 175, 190, 0.2)', duration: 0.3 });
            });
            element.addEventListener('mouseleave', () => {
                gsap.to(cursor, { scale: 1, backgroundColor: '#fff', duration: 0.3 });
                gsap.to(cursorBG, { scale: 1, backgroundColor: 'rgba(255, 255, 255, 0.2)', duration: 0.3 });
            });
        });

        const buttons = document.querySelectorAll('.error-button .error-button');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                gsap.to(button, { scale: 1.1, duration: 0.3 });
                gsap.to(cursor, { scale: 0.5, duration: 0.3 });
                gsap.to(cursorBG, { scale: 2, backgroundColor: 'rgba(227, 175, 190, 0.4)', duration: 0.3 });
            });
            button.addEventListener('mouseleave', () => {
                gsap.to(button, { scale: 1, duration: 0.3 });
                gsap.to(cursor, { scale: 1, duration: 0.3 });
                gsap.to(cursorBG, { scale: 1, backgroundColor: 'rgba(255, 255, 255, 0.2)', duration: 0.3 });
            });
        });

        return () => {
            tl.kill();
            window.removeEventListener('mousemove', moveCursor);
            document.body.style.cursor = 'default';
        };
    }, []);

    return (
        <div className="error-page">
            <div className="particles"></div>
            <div ref={cursorRef} className="custom-cursor"></div>
            <div ref={cursorBGRef} className="custom-cursor-bg"></div>
            <h1 ref={titleRef} className="error-title bubble-text">Oops! 404</h1>
            <p ref={messageRef} className="error-message bubble-text">The page you're looking for seems to have vanished into thin air!</p>
            <div className="button-container">
                <button ref={backButtonRef} className="error-button error-button" onClick={() => window.history.back()}>
                    Go Back
                </button>
                <button ref={homeButtonRef} className="error-button home-button error-button" onClick={() => window.location.href = '/'}>
                    Home Page
                </button>
            </div>
        </div>
    );
}