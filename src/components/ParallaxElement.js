import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Componente ParallaxElement para efectos parallax
 * Según especificaciones del archivo INSTRUCCIONES_PARA_CLAUDE_CODE.md
 */
const ParallaxElement = ({ 
    children, 
    offset = 100,
    className = '',
    style = {},
    speed = 0.5,
    direction = 'y' // 'y' para vertical, 'x' para horizontal
}) => {
    const { scrollY } = useScroll();
    
    // Transformar el scroll en movimiento parallax
    const yParallax = useTransform(
        scrollY,
        [0, 1000],
        direction === 'y' ? [0, offset * speed] : [0, 0]
    );
    
    const xParallax = useTransform(
        scrollY,
        [0, 1000],
        direction === 'x' ? [0, offset * speed] : [0, 0]
    );

    return (
        <motion.div
            className={`parallax-element ${className}`}
            style={{
                y: yParallax,
                x: xParallax,
                ...style
            }}
        >
            {children}
        </motion.div>
    );
};

/**
 * Componente ParallaxBackground para fondos con efecto parallax
 */
export const ParallaxBackground = ({ 
    imageUrl, 
    className = '',
    height = '100vh',
    speed = 0.3
}) => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, -300 * speed]);

    return (
        <div 
            className={`parallax-background ${className}`} 
            style={{ 
                height, 
                overflow: 'hidden',
                position: 'relative'
            }}
        >
            <motion.div
                className="parallax-image"
                style={{
                    y,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '120%'
                }}
            />
        </div>
    );
};

/**
 * Componente para elementos de fondo sutiles estilo ACES
 */
export const AcesBackgroundElement = ({ 
    className = '',
    animate = true 
}) => {
    const variants = {
        initial: {
            opacity: 0,
            scale: 0.8
        },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        }
    };

    const pulseVariants = {
        initial: {
            opacity: 0.05
        },
        animate: {
            opacity: [0.05, 0.1, 0.05],
            transition: {
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity
            }
        }
    };

    return (
        <motion.div
            className={`Style_background__FJpaX aces-background-subtle ${className}`}
            variants={animate ? pulseVariants : variants}
            initial="initial"
            animate="animate"
        />
    );
};

export default ParallaxElement;