import React from 'react';

// Skyline: Sun behind a friendly cloud
export const SkylineIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Sun rays */}
    <circle cx="15" cy="9" r="4.5" fill="#FBBF24" />
    <path d="M15 2V4M15 14V16M8.5 9H10.5M19.5 9H21.5M10.4 4.4L11.8 5.8M18.2 12.2L19.6 13.6M10.4 13.6L11.8 12.2M18.2 5.8L19.6 4.4" stroke="#F59E0B" strokeWidth="1.2" strokeLinecap="round" />
    {/* Cloud */}
    <path
      d="M6.5 17C4.5 17 3 15.5 3 13.5C3 11.7 4.3 10.2 6.1 10.05C6.7 7.7 8.7 6 11.2 6C13.4 6 15.2 7.3 16 9.2C16.3 9.1 16.6 9 17 9C19.2 9 21 10.8 21 13C21 15.2 19.2 17 17 17H6.5Z"
      fill="#93C5FD"
      stroke="#475569"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

// Plane line: Small stylized airplane
export const PlaneIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21 12L3 4.5L6.5 12L3 19.5L21 12Z"
      fill="#E2E8F0"
      stroke="#475569"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path d="M6.5 12H21" stroke="#334155" strokeWidth="1.2" />
    <path d="M10 8.5L14 12L10 15.5" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Grass line: Tufts of green grass
export const GrassIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 18C4 13 6 8 8 7C7.5 11 8.5 15 9.5 18M9.5 18C10.5 12 12.5 6 14.5 5C14 10 14.5 15 15 18M15 18C16 13 18.5 9 20.5 8C19.5 12 19 16 19.5 18"
      stroke="#16A34A"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line x1="2" y1="18.5" x2="22" y2="18.5" stroke="#15803D" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

// Worm line: Friendly earthworm crawling
export const WormIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 13C4 11 6 11 7 13C8 15 10 15 11 13C12 11 14 11 15 13C16 15 18 15 19 13C19.8 11.5 21 11.5 21.5 12.5"
      stroke="#92400E"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Worm eye */}
    <circle cx="20.5" cy="12" r="0.75" fill="#78350F" />
  </svg>
);

// Echo the Owl Mascot Icon
export const EchoOwlIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
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
