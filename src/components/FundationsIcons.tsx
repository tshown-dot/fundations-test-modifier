import React from 'react';

// Authentic Fundations Line Icons using the official imagery
export const SkylineImage: React.FC<{ className?: string }> = ({ className = 'w-5 h-5 object-contain' }) => (
  <img src="/assets/icons/skyline.png" alt="Skyline" className={className} draggable={false} />
);

export const PlaneImage: React.FC<{ className?: string }> = ({ className = 'w-6 h-4 object-contain' }) => (
  <img src="/assets/icons/plane.png" alt="Plane line" className={className} draggable={false} />
);

export const GrassImage: React.FC<{ className?: string }> = ({ className = 'w-5 h-5 object-contain' }) => (
  <img src="/assets/icons/grass.png" alt="Grass line" className={className} draggable={false} />
);

export const WormImage: React.FC<{ className?: string }> = ({ className = 'w-5 h-5 object-contain' }) => (
  <img src="/assets/icons/worm.png" alt="Worm line" className={className} draggable={false} />
);

// Echo the Owl Mascot Icon
export const EchoOwlIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Graduation cap */}
    <polygon points="32,6 8,17 32,26 56,17" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
    <polygon points="18,19 18,25 32,31 46,25 46,19 32,24" fill="#334155" />
    <line x1="44" y1="23" x2="48" y2="34" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
    <circle cx="48" cy="35" r="2" fill="#DC2626" />
    
    {/* Body */}
    <ellipse cx="32" cy="42" rx="20" ry="18" fill="#B45309" stroke="#78350F" strokeWidth="1.5" />
    {/* Belly */}
    <ellipse cx="32" cy="45" rx="13" ry="12" fill="#FEF3C7" stroke="#FDE68A" strokeWidth="1" />
    
    {/* Big Eyes */}
    <circle cx="24" cy="35" r="7.5" fill="#FFFFFF" stroke="#78350F" strokeWidth="1.5" />
    <circle cx="40" cy="35" r="7.5" fill="#FFFFFF" stroke="#78350F" strokeWidth="1.5" />
    <circle cx="25" cy="35" r="4" fill="#1E293B" />
    <circle cx="39" cy="35" r="4" fill="#1E293B" />
    <circle cx="26" cy="33.5" r="1.2" fill="#FFFFFF" />
    <circle cx="40" cy="33.5" r="1.2" fill="#FFFFFF" />
    
    {/* Beak */}
    <polygon points="32,38 29,43 35,43" fill="#F59E0B" stroke="#D97706" strokeWidth="1" />
    
    {/* Feet / Book */}
    <path d="M22 60L26 56L30 60" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M34 60L38 56L42 60" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
