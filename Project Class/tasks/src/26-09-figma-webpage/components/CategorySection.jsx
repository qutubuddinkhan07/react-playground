import React from "react";
import CategoryCard from "./CategoryCard";

import ActionImg from "../assets/popular/Action.png";
import SciFiImg from "../assets/popular/Sci-Fi.png";
import ThrillerImg from "../assets/popular/Thriller.png";
import ComedyImg from "../assets/popular/Comedy.png";
import RomanceImg from "../assets/popular/Romance.png";

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      title: "ACTION",
      image: ActionImg,
      borderColor: "border-white/10",
    },
    {
      id: 2,
      title: "SCI-FI",
      image: SciFiImg,
      borderColor: "border-white/10",
    },
    {
      id: 3,
      title: "THRILLER",
      image: ThrillerImg,
      bgGradient: "bg-gradient-to-r from-[#8B09E5]/80 to-[#000000]/40",
      borderColor: "border-white/10",
    },
    {
      id: 4,
      title: "COMEDY",
      image: ComedyImg,
      bgGradient: "bg-gradient-to-r from-[#E5B909]/80 to-[#000000]/40",
      borderColor: "border-white/10",
    },
    {
      id: 5,
      title: "ROMANCE",
      image: RomanceImg,
      bgGradient: "bg-gradient-to-r from-[#E50986]/80 to-[#000000]/40",
      borderColor: "border-white/10",
    },
  ];

  return (
    <section className="my-10">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
        Popular Categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 md:gap-4">
        {categories.map((cat) => (
          <CategoryCard
            key={cat.id}
            title={cat.title}
            image={cat.image}
            bgGradient={cat.bgGradient}
            borderColor={cat.borderColor}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
