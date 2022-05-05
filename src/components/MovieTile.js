import React from "react";
import "../css/movieTile.css";

import { image_base_url } from "../utils/constants";
import { getYear, getGenre } from "../utils/helpers";

const MovieTile = (props) => {
  const { movie, selectedType } = props;
  //only showing the first genre as per design
  const genre = getGenre(selectedType, movie.genre_ids);
  return (
    <div>
      <img
        src={`${image_base_url}${movie.backdrop_path}`}
        alt="No image available"
      ></img>
      <p className="movie-title">
        {selectedType === "movie" ? movie.title : movie.name}
      </p>
      <p className="movie-subtitle">{`${genre ? genre : ""}, ${getYear(
        selectedType === "tv" ? movie.first_air_date : movie.release_date
      )}`}</p>
    </div>
  );
};

export default MovieTile;
