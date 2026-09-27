import React from "react";

const CategoryCard = ({ title, image, bgGradient, borderColor }) => {
  return (
    <div
      className={`relative h-[76px] md:h-[86px] rounded-xl overflow-hidden cursor-pointer flex items-center justify-center select-none group transition-transform duration-300 hover:scale-[1.02] border ${
        borderColor || "border-white/10"
      } bg-[#18181c] shadow-lg`}
    >
      {/* 1. Background Image (visible with crisp squares across the card) */}
      {image && (
        <img
          src={image}
          alt={title}
          className={`absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
            bgGradient ? "opacity-60" : "opacity-100"
          }`}
        />
      )}

      {/* 2. Color Gradient Overlay: Solid color on the left, translucent color on the right so both background image and color show together */}
      {bgGradient ? (
        <div className={`absolute inset-0 ${bgGradient}`} />
      ) : (
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-300" />
      )}

      {/* 3. Category Title */}
      <span className="relative z-10 text-xs md:text-sm font-bold tracking-wider uppercase text-white drop-shadow-sm">
        {title}
      </span>
    </div>
  );
};

export default CategoryCard;
