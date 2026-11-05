import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  className = "",
}) => {
  return (
    <div className={`text-center ${className}`}>
      <h3 className="font-serif-custom text-xl md:text-2xl tracking-[0.25em] text-[#3D352E] uppercase">
        {title}
      </h3>
      {subtitle && (
        <p className="mt-1 text-xs tracking-[0.15em] text-[#8F7E6D] uppercase">
          {subtitle}
        </p>
      )}
    </div>
  );
};
