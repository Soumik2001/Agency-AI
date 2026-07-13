import { useState, useRef } from 'react';

const GlowCard = ({ children, className = '', glowSize = 300, glowColor = 'from-blue-500 via-indigo-500 to-purple-500', onClick }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);
    const divRef = useRef(null);
    const handleMouseMove = (e) => {
        const bounds = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
    };
    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            onClick={onClick}
            className={`relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 ${className}`}
        >
            <div
                className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r ${glowColor} absolute z-0 transition-opacity duration-500 mix-blend-multiply dark:mix-blend-lighten ${visible ? 'opacity-70' : 'opacity-0'}`}
                style={{
                    width: `${glowSize}px`,
                    height: `${glowSize}px`,
                    top: position.y - glowSize / 2,
                    left: position.x - glowSize / 2,
                }}
            />
            <div className="relative z-10 h-full">
                {children}
            </div>
        </div>
    );
};
export default GlowCard;