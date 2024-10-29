import React, { useEffect, useRef, useState } from 'react';
import './ScrollToTopButton.css'; 

export const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(0);
    const pathRef = useRef(null); 
    const [pathLength, setPathLength] = useState(0); 

    const toggleVisibility = () => {
        setIsVisible(window.pageYOffset > 50);
    };

    const updateProgress = () => {
        const scrollTop = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;

        if (height > 0 && pathLength > 0) {
            const progressPercent = (scrollTop / height) * pathLength; 
            const adjustedProgress = Math.min(progressPercent, pathLength);
            setProgress(adjustedProgress);
        } else {
            setProgress(0);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const calculatePathLength = () => {
        if (pathRef.current) {
            const length = pathRef.current.getTotalLength();
            setPathLength(length); 
            updateProgress(); 
        }
    };

    useEffect(() => {
        calculatePathLength();

        window.addEventListener('scroll', toggleVisibility);
        window.addEventListener('scroll', updateProgress);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            window.removeEventListener('scroll', updateProgress);
        };
    }, [pathLength]); 

    return (
        <div>
            <div className={`progress-wrap ${isVisible ? 'active-progress' : ''}`} onClick={scrollToTop}>
                <svg className="progress-circle" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path
                        ref={pathRef}
                        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                        style={{
                            strokeDasharray: `${pathLength} ${pathLength}`,
                            strokeDashoffset: `${pathLength - progress}`, 
                        }}
                    />
                </svg>
                <div className="icon">&#8679;</div> 
            </div>
        </div>
    );
};

export default ScrollToTopButton;
