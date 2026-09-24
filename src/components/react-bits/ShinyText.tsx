import React from 'react';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 4,
  className = '',
}) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`inline-block bg-clip-text ${
        disabled
          ? 'text-[#fdfbf7]'
          : 'text-[#d8cfc4] bg-gradient-to-r from-[#d8cfc4] via-[#fdfbf7] via-[#e5c158] to-[#d8cfc4] bg-[length:200%_auto] animate-shine'
      } ${className}`}
      style={{
        animationDuration,
      }}
    >
      {text}
    </span>
  );
};
