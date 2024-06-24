// MovieChip.js
/* eslint-disable react/prop-types */
import "./movie-chip.css";
function MovieChip({ category, selectedMovies, setSelectedMovies }) {
  const handleRemove = (category) => {
    const isThere = selectedMovies.find((movie) => movie === category);
    if (isThere) {
      setSelectedMovies(selectedMovies.filter((movie) => movie !== category));
    }
  };
  return (
    <div>
      <button className="chip-btn">
        {category}&nbsp;&nbsp;&nbsp;&nbsp;
        <span
          onClick={() => {
            handleRemove(category);
          }}
          style={{
            paddingLeft: "45px",
          }}
        >
          X
        </span>
      </button>
    </div>
  );
}

export default MovieChip;
