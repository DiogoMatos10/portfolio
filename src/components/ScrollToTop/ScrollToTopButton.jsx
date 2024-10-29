import React, { useEffect, useRef, useState } from 'react';
import './ScrollToTopButton.css'; 

export const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(0);
    const pathRef = useRef(null); // Referência ao elemento path
    const [pathLength, setPathLength] = useState(0); // Estado para armazenar o comprimento do caminho

    const toggleVisibility = () => {
        setIsVisible(window.pageYOffset > 50);
    };

    const updateProgress = () => {
        const scrollTop = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;

        // Verifica se o comprimento do conteúdo é maior que zero
        if (height > 0 && pathLength > 0) {
            const progressPercent = (scrollTop / height) * pathLength; 
            // Ajuste para garantir que não exceda o comprimento total
            const adjustedProgress = Math.min(progressPercent, pathLength);
            setProgress(adjustedProgress);
        } else {
            // Se o comprimento do conteúdo ou o caminho for zero, reseta o progresso
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
            setPathLength(length); // Atualiza o comprimento do caminho
            updateProgress(); // Atualiza a progressão após definir o comprimento
        }
    };

    useEffect(() => {
        // Atualiza o comprimento do caminho e o progresso sempre que a página for carregada ou mudada
        calculatePathLength();

        // Adiciona event listeners
        window.addEventListener('scroll', toggleVisibility);
        window.addEventListener('scroll', updateProgress);

        return () => {
            // Remove event listeners
            window.removeEventListener('scroll', toggleVisibility);
            window.removeEventListener('scroll', updateProgress);
        };
    }, [pathLength]); // Adiciona pathLength como dependência

    return (
        <div>
            {/* Barra de progresso */}
            <div className={`progress-wrap ${isVisible ? 'active-progress' : ''}`} onClick={scrollToTop}>
                <svg className="progress-circle" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path
                        ref={pathRef} // Adiciona a referência ao elemento path
                        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                        style={{
                            strokeDasharray: `${pathLength} ${pathLength}`,
                            strokeDashoffset: `${pathLength - progress}`, // Ajuste do deslocamento
                        }}
                    />
                </svg>
                <div className="icon">&#8679;</div> {/* Ícone de seta para cima */}
            </div>
        </div>
    );
};

export default ScrollToTopButton;
