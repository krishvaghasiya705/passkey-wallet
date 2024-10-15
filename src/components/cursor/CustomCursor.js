import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './CustomCursor.scss';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const cursorBGRef = useRef(null);

    useEffect(() => {
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
        };

        const textElements = document.querySelectorAll('a,button,input,textarea,select,.header-centered-switch-button');
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

        window.addEventListener('mousemove', moveCursor);
        document.body.style.cursor = 'none';

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.body.style.cursor = 'default';
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="custom-cursor"></div>
            <div ref={cursorBGRef} className="custom-cursor-bg"></div>
        </>
    );
};

export default CustomCursor;