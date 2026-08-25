import React from "react";

const Card = ({ players }) => {
  let { name, image, jersey, club, club_img } = players;
  return (
    <>
      <div className="h-96 w-64 overflow-hidden flex flex-col relative items-center border-2 rounded-3xl border-amber-500 bg-linear-to-b from-[#e12615] via-[#a30a28] to-[#e12615] shadow-xl shadow-emerald-300">
        {/* ghost jersey number, bleeding off the top edge */}
        <div className="absolute -top-6 inset-x-0 text-center">
          <span className="text-9xl select-none leading-non text-emerald-800">
            {jersey}
          </span>
        </div>

        {/* eyebrow */}
        <div className="relative mt-5 flex items-center gap-2">
          <span className="h-px w-6 bg-amber-500"></span>
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            Player Card
          </span>
          <span className="h-px w-6 bg-amber-500"></span>
        </div>

        {/* photo medallion */}
        <div className="relative mt-4 h-28 w-28 overflow-hidden rounded-full shadow-xl ring-3 ring-amber-400 ring-offset-3 ring-offset-emerald-900">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-115"
          />
        </div>

        {/* name */}
        <h1 className="relative mt-4 px-4 text-center text-2xl leading-none tracking-wider text-white">
          {name}
        </h1>

        <p className="relative mt-2 text-sm font-semibold uppercase tracking-widest text-amber-300">
          No. {jersey}
        </p>

        <div className="flex-1" />

        {/* club footer */}
        <div className="relative flex w-full items-center justify-center gap-3 border-t-2 border-amber-500 bg-emerald-950 px-4 py-4">
          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white ring-2 ring-amber-400">
            <img
              src={club_img}
              alt={club}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="max-w-32 truncate text-sm font-semibold text-white">
            {club}
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
