import React from "react";

const Card = (props) => {
  const { details } = props;
  const { login, avatar_url, id } = details;
  return (
    <div className="w-48 overflow-hidden bg-mist-200 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-800">
      <div className="aspect-square w-full overflow-hidden bg-slate-100">
        <img
          src={avatar_url}
          alt={login}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className="p-4 text-center">
        <h1 className="truncate font-semibold text-slate-800 capitalize dark:text-slate-100">{login}</h1>
        <p className="mt-1 text-xs text-slate-400">ID: {id}</p>
      </div>
    </div>
  );
};

export default Card;
