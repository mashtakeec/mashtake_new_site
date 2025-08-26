/**
 * Configuración de animaciones para el sitio ACES
 * Según especificaciones del archivo INSTRUCCIONES_PARA_CLAUDE_CODE.md
 */

// Variantes de animación para entrada de elementos
export const fadeInUp = {
    hidden: { 
        opacity: 0, 
        y: 50 
    },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export const fadeInLeft = {
    hidden: { 
        opacity: 0, 
        x: -50 
    },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export const fadeInRight = {
    hidden: { 
        opacity: 0, 
        x: 50 
    },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export const scaleIn = {
    hidden: { 
        opacity: 0, 
        scale: 0.8 
    },
    visible: { 
        opacity: 1, 
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

// Animación stagger para listas
export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

// Animaciones para botones específicos de ACES
export const acesButtonHover = {
    rest: {
        scale: 1,
        backgroundColor: "transparent",
        color: "var(--aces-black)",
        borderColor: "var(--aces-border)"
    },
    hover: {
        scale: 1.02,
        backgroundColor: "var(--aces-black)",
        color: "var(--aces-white)",
        borderColor: "var(--aces-black)",
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    },
    tap: {
        scale: 0.98
    }
};

// Animaciones para scroll
export const parallaxY = (offset = 100) => ({
    initial: { y: -offset },
    animate: { y: offset },
    transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse"
    }
});

// Animación para elementos de fondo sutiles
export const backgroundPulse = {
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

// Configuración de viewport para animaciones en scroll
export const viewportConfig = {
    once: true,
    amount: 0.3,
    margin: "0px 0px -100px 0px"
};

// Transiciones específicas
export const transitions = {
    default: {
        duration: 0.6,
        ease: "easeOut"
    },
    fast: {
        duration: 0.3,
        ease: "easeOut"
    },
    slow: {
        duration: 1,
        ease: "easeInOut"
    },
    spring: {
        type: "spring",
        stiffness: 300,
        damping: 20
    }
};

// Función helper para crear animaciones personalizadas
export const createCustomAnimation = (
    fromProps = {},
    toProps = {},
    transitionConfig = transitions.default
) => ({
    hidden: fromProps,
    visible: {
        ...toProps,
        transition: transitionConfig
    }
});

// Animación para texto con efecto typewriter
export const typewriterAnimation = (text, delay = 0.05) => ({
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: text.length * delay,
            ease: "linear"
        }
    }
});

export default {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggerContainer,
    staggerItem,
    acesButtonHover,
    parallaxY,
    backgroundPulse,
    viewportConfig,
    transitions,
    createCustomAnimation,
    typewriterAnimation
};