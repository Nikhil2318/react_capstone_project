// import React from "react";
import "./movies.css";
import { useState } from "react";
import MovieBox from "../Components/MovieBox";
import MovieChip from "../Components/MovieChip";
import { useNavigate } from "react-router-dom";
import imageMapping from "../Components/imageMapping";
import colorMapping from "../Components/colorMapping";

function MovieSelection() {
  const MOVIES = [
    {
      id: 1,
      movie: "Action",
    },
    {
      id: 2,
      movie: "Drama",
    },
    {
      id: 3,
      movie: "Romance",
    },
    {
      id: 4,
      movie: "Thriller",
    },
    {
      id: 5,
      movie: "Western",
    },
    {
      id: 6,
      movie: "Horror",
    },
    {
      id: 7,
      movie: "Fantasy",
    },
    {
      id: 8,
      movie: "Music",
    },
    {
      id: 9,
      movie: "Fiction",
    },
  ];
  const [selectedMovies, setSelectedMovies] = useState([]);
  const navigate = useNavigate();
  const moveNext = () => {
    if (selectedMovies.length < 3) {
      alert("please select 3 movies");
    } else {
      localStorage.setItem("selectedMovies", JSON.stringify(selectedMovies));
      setSelectedMovies([]);
      navigate("/info");
    }
  };
  return (
    <>
      <div className="movie-page">
        <div className="movie-grid">
          {MOVIES.map((category) => (
            <MovieBox
              key={category.id}
              category={category}
              selectedMovies={selectedMovies}
              setSelectedMovies={setSelectedMovies}
              imgSrc={imageMapping[category.movie]}
              colorSrc={colorMapping[category.movie]}
            />
          ))}
        </div>
        <div
          style={{
            marginTop: "-100px",
            paddingLeft: "50px",
            display: "flex",
          }}
        >
          {selectedMovies.map((category) => (
            <MovieChip
              key={category.id}
              category={category}
              selectedMovies={selectedMovies}
              setSelectedMovies={setSelectedMovies}
            />
          ))}
        </div>
        {selectedMovies.length < 3 && (
          <p style={{ color: "red", paddingLeft: "50px" }}>
            please select 3 movies
          </p>
        )}
        <button
          className="next-btn"
          style={{
            marginTop: "100px",
            float: "right",
            marginRight: "50px",
          }}
          onClick={moveNext}
        >
          Next Page
        </button>
      </div>
    </>
  );
}

export default MovieSelection;
