import { useState, useCallback } from 'react';

/**
 * Hook personalizado para manejar efectos hover
 * Según especificaciones del archivo INSTRUCCIONES_PARA_CLAUDE_CODE.md
 */
export const useHover = (initialState = false) => {
    const [isHovered, setIsHovered] = useState(initialState);

    const onMouseEnter = useCallback(() => setIsHovered(true), []);
    const onMouseLeave = useCallback(() => setIsHovered(false), []);

    const hoverProps = {
        onMouseEnter,
        onMouseLeave,
    };

    return [isHovered, hoverProps];
};

/**
 * Hook para animaciones de entrada con Framer Motion
 */
export const useEntryAnimation = (delay = 0) => {
    return {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { 
            duration: 0.6, 
            ease: "easeOut",
            delay: delay 
        }
    };
};

/**
 * Hook para efectos hover con estilos específicos de ACES
 */
export const useAcesHover = () => {
    const [isHovered, hoverProps] = useHover();
    
    const buttonStyle = {
        backgroundColor: isHovered ? 'var(--aces-black)' : 'transparent',
        color: isHovered ? 'var(--aces-white)' : 'var(--aces-black)',
        borderColor: isHovered ? 'var(--aces-black)' : 'var(--aces-border)',
        transform: isHovered ? 'scale(1.02)' : 'scale(1)',
        transition: 'var(--aces-transition)',
    };

    return [buttonStyle, hoverProps, isHovered];
};

export default useHover;