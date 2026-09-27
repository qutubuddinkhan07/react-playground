import React from "react";
import FeaturedCard from "./FeaturedCard";

import AwardsImg from "../assets/featured/awards.jpg";
import ClassicsImg from "../assets/featured/classics.jpg";
import SuperheroImg from "../assets/featured/superhero.jpg";

const FeaturedSection = () => {
  const featuredItems = [
    {
      id: 1,
      title: "Superhero Universe",
      description: "Catch up on the latest sagas from your favorite heroes.",
      image: SuperheroImg,
    },
    {
      id: 2,
      title: "Award Winners",
      description: "Critically acclaimed masterpieces you can't miss.",
      image: AwardsImg,
    },
    {
      id: 3,
      title: "Golden Classics",
      description: "Timeless movies that defined generations.",
      image: ClassicsImg,
    },
  ];

  return (
    <section className="my-10">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
        Featured Collections
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {featuredItems.map((item) => (
          <FeaturedCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
