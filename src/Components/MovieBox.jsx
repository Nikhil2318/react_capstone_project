/* eslint-disable react/prop-types */
// import React from 'react'
// import action from "../images/action.png";
import "./movie-box.css";
function MovieBox({
  category,
  selectedMovies,
  setSelectedMovies,
  imgSrc,
  colorSrc,
}) {
  const handleSelection = (category) => {
    const isMovieThere = selectedMovies.find(
      (movie) => movie === category.movie
    );
    if (isMovieThere) {
      setSelectedMovies((prevMovies) =>
        prevMovies.filter((movie) => movie !== category.movie)
      );
    } else {
      setSelectedMovies([...selectedMovies, category.movie]);
    }
  };
  return (
    <div
      className="genre-box"
      onClick={() => handleSelection(category)}
      style={{
        backgroundColor: colorSrc,
        border: `2px solid ${
          selectedMovies.includes(category.movie) ? "red" : "black"
        }`,
      }}
    >
      <p className="movie-title">{category.movie}</p>
      <div className="genre-img">
        <img src={imgSrc} alt={`${category.movie}-img`} />
      </div>
    </div>
  );
}
export default MovieBox;
