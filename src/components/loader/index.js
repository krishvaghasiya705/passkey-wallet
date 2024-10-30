import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './loader.scss'; // Assuming you have a CSS file for styles

const Loader = () => {
    useEffect(() => {
        // Background animation
        gsap.to('.loader-bg', {
            backgroundColor: '#000000',
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            stagger: {
                amount: 2,
                from: 'start'
            }
        });

        // Text animations
        gsap.fromTo('.loading-text', 
            { opacity: 0, y: 50 }, 
            { opacity: 1, y: 0, duration: 1, delay: 0.5, onComplete: () => {
                // Show passkey text after loading text
                gsap.fromTo('.passkey-text', 
                    { opacity: 0, y: -50 }, 
                    { opacity: 1, y: 0, duration: 1, delay: 0.5 }
                );
            }}
        );
        gsap.fromTo('.passkey-text', 
            { opacity: 0, y: -50 }, 
            { opacity: 1, y: 0, duration: 1, delay: 1 }
        );

        // Circle animations
        const circles = document.querySelectorAll('.circle');
        circles.forEach((circle, index) => {
            gsap.to(circle, {
                rotation: 360,
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100,
                duration: 3,
                repeat: -1,
                ease: 'linear',
                delay: index * 0.5
            });
        });
    }, []);

    return (
        <div className="loader-container">
            <div className="loader-bg"></div>
            <div className="passkey-text">THE PASSKEY WALLET IS</div>
            <div className="loading-text">LOADING</div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
    );
};

export default Loader;
