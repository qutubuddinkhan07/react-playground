import React from "react";
import Card from "./Card";
import Movie1 from "../assets/card/Movie1.png";
import Movie2 from "../assets/card/Movie2.png";
import Movie3 from "../assets/card/Movie3.png";
import Movie4 from "../assets/card/Movie4.png";
import Movie5 from "../assets/card/Movie5.png";
import Movie6 from "../assets/card/Movie6.png";
import Movie7 from "../assets/card/Movie7.jpg";
import StarIcon from "../assets/card/star-icon.svg?react";
import CategorySection from "./CategorySection";
import FeaturedSection from "./FeaturedSection";

const Contents = () => {
  const trendings = [
    {
      image: Movie7,
      title: "Interstellar",
      star: StarIcon,
      ratings: 8.7,
      genre: "Sci-fi/Adventure",
    },
    {
      image: Movie1,
      title: "Neon City Rising",
      star: StarIcon,
      ratings: 8.9,
      genre: "action",
    },
    {
      image: Movie2,
      title: "The Dark Sorcerer",
      star: StarIcon,
      ratings: 9.2,
      genre: "fantasy",
    },
    {
      image: Movie3,
      title: "Silent Echoes",
      star: StarIcon,
      ratings: 8.5,
      genre: "thriller",
    },
    {
      image: Movie4,
      title: "void walker",
      star: StarIcon,
      ratings: 7.8,
      genre: "sci-fi",
    },
    {
      image: Movie5,
      title: "Before The Dawn",
      star: StarIcon,
      ratings: 8.1,
      genre: "Romance",
    },
    {
      image: Movie6,
      title: "Weekend Plans",
      star: StarIcon,
      ratings: 7.4,
      genre: "comedy",
    },
  ];

  return (
    <div className="flex flex-col px-9 space-y-10">
      <div className="flex justify-between mb-2">
        <h2 className="text-[#E5E5E5] text-xl font-bold">Trending Now</h2>
        <a href="#" className="text-[#54B9F5] text-sm hover:underline">
          See all &gt;
        </a>
      </div>

      <div className="flex overflow-x-auto gap-3 py-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {trendings.map((val, idx) => (
          <div key={idx} className="flex-shrink-0">
            <Card trendings={val} />
          </div>
        ))}
      </div>

      <CategorySection />
      <FeaturedSection />
    </div>
  );
};

export default Contents;
