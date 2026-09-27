import React from "react";

const FeaturedCard = ({ title, description, image }) => {
  return (
    <div className="relative h-44 md:h-52 rounded-xl overflow-hidden cursor-pointer group shadow-lg border border-white/5 hover:border-white/20 transition-all duration-300">
      {/* Background Poster */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Gradient Vignette matching Figma */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

      {/* Content Overlay */}
      <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end z-10">
        <h3 className="text-base md:text-lg font-bold text-white mb-1 drop-shadow">
          {title}
        </h3>
        <p className="text-xs text-gray-300 line-clamp-2 max-w-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeaturedCard;
