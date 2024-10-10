import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.scss';

const CustomCursor = () => {
    const outerCursorRef = useRef(null);
    const innerCursorRef = useRef(null);
    const requestRef = useRef(null);
    const previousTimeRef = useRef(null);

    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        let mouseX = 0;
        let mouseY = 0;
        let outerCursorX = 0;
        let outerCursorY = 0;
        let innerCursorX = 0;
        let innerCursorY = 0;

        const animate = (time) => {
            if (previousTimeRef.current !== undefined) {
                outerCursorX += (mouseX - outerCursorX) * 0.2;
                outerCursorY += (mouseY - outerCursorY) * 0.2;
                innerCursorX += (mouseX - innerCursorX) * 0.1; // Slower movement for inner cursor
                innerCursorY += (mouseY - innerCursorY) * 0.1; // Slower movement for inner cursor

                if (outerCursorRef.current) {
                    outerCursorRef.current.style.transform = `translate(${outerCursorX}px, ${outerCursorY}px)`;
                }
                if (innerCursorRef.current) {
                    innerCursorRef.current.style.transform = `translate(${innerCursorX}px, ${innerCursorY}px)`;
                }
            }
            previousTimeRef.current = time;
            requestRef.current = requestAnimationFrame(animate);
        };

        const moveCursor = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        document.addEventListener('mousemove', moveCursor);

        const hoverElements = document.querySelectorAll('a, button, input, textarea, p, h1, h2, h3, h4, h5, h6');
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        });

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', moveCursor);
            hoverElements.forEach(element => {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
            });
            cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return (
        <>
            <div
                ref={outerCursorRef}
                className={`cursor-outer ${isHovering ? 'cursor-hover' : ''}`}
            />
            <div
                ref={innerCursorRef}
                className={`cursor-inner ${isHovering ? 'cursor-hover' : ''}`}
            />
        </>
    );
};

export default CustomCursor;