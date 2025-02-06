import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../UI/Card";

export default function Movie() {
  const movieData = useLoaderData();

  console.log(movieData);

  return (
    <ul className="container grid grid-four-cols">
      {movieData.Search.map((curData) => (
        <Card key={curData.imdbID} curData={curData} />
      ))}
    </ul>
  );
}
