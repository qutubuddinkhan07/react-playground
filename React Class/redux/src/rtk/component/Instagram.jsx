import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../features/counter/counterSlice";
import {
  giveDislike,
  giveLike,
  reset,
} from "../features/instagram/instagramSlice";

const Instagram = () => {
  const data = useSelector((state) => state.instagram);
  //   console.log(data);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Instagram</h1>
      <h2>Like: {data.like}</h2>
      <h2>Dislike: {data.dislike}</h2>
      <button onClick={() => dispatch(giveLike())}>Like</button>
      <button onClick={() => dispatch(giveDislike())}>Dislike</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Instagram;
