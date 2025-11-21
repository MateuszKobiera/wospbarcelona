import React from 'react';

interface SimpleIconProps {
  path: string;
  title?: string;
  className?: string;
  size?: number;
}

export function SimpleIcon({ path, title, className = '', size = 24 }: SimpleIconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
    >
      {title && <title>{title}</title>}
      <path d={path} />
    </svg>
  );
}
