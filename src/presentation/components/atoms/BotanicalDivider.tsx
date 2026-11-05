import React from "react";

interface BotanicalDividerProps {
  className?: string;
}

export const BotanicalDivider: React.FC<BotanicalDividerProps> = ({ className = "my-4" }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        width="60"
        height="18"
        viewBox="0 0 60 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#B6A695]"
      >
        {/* Central stem */}
        <path
          d="M 5 9 Q 30 9 55 9"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeLinecap="round"
          className="opacity-60"
        />
        {/* Left leaves */}
        <path
          d="M 22 9 C 20 6, 15 6, 12 8 C 15 9.5, 19 9.5, 22 9 Z"
          fill="currentColor"
          className="opacity-70"
        />
        <path
          d="M 26 9 C 24 12, 19 12, 16 10 C 19 8.5, 23 8.5, 26 9 Z"
          fill="currentColor"
          className="opacity-70"
        />
        {/* Right leaves */}
        <path
          d="M 38 9 C 40 6, 45 6, 48 8 C 45 9.5, 41 9.5, 38 9 Z"
          fill="currentColor"
          className="opacity-70"
        />
        <path
          d="M 34 9 C 36 12, 41 12, 44 10 C 41 8.5, 37 8.5, 34 9 Z"
          fill="currentColor"
          className="opacity-70"
        />
        {/* Center leaf bud */}
        <circle cx="30" cy="9" r="1.5" fill="currentColor" className="opacity-80" />
      </svg>
    </div>
  );
};
