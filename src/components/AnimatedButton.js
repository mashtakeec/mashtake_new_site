import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = ({ 
    children, 
    onClick, 
    href, 
    className = '', 
    variant = 'primary',
    disabled = false,
    ...props 
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const baseClasses = [
        'aces-button',
        'Style_btn__ylrxe',
        'Style_rounded-btn__MV1ZJ',
        className
    ].filter(Boolean).join(' ');

    const buttonStyle = {
        backgroundColor: isHovered ? 'var(--aces-black)' : 'transparent',
        color: isHovered ? 'var(--aces-white)' : 'var(--aces-black)',
        borderColor: isHovered ? 'var(--aces-black)' : 'var(--aces-border)',
        transform: isHovered ? 'scale(1.02)' : 'scale(1)',
        transition: 'var(--aces-transition)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
    };

    const motionProps = {
        whileHover: !disabled ? { scale: 1.02 } : {},
        whileTap: !disabled ? { scale: 0.98 } : {},
        transition: { duration: 0.3, ease: "easeOut" },
        onHoverStart: () => !disabled && setIsHovered(true),
        onHoverEnd: () => !disabled && setIsHovered(false),
    };

    const handleClick = (e) => {
        if (disabled) {
            e.preventDefault();
            return;
        }
        if (onClick) {
            onClick(e);
        }
    };

    // Si es un enlace
    if (href) {
        return (
            <motion.a
                href={href}
                className={baseClasses}
                style={buttonStyle}
                onClick={handleClick}
                {...motionProps}
                {...props}
            >
                {children}
            </motion.a>
        );
    }

    // Si es un botón
    return (
        <motion.button
            className={baseClasses}
            style={buttonStyle}
            onClick={handleClick}
            disabled={disabled}
            {...motionProps}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default AnimatedButton;