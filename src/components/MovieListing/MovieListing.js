import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movies/movieSlide';
import MovieCard from '../MovieCard/MovieCard';

export default function MovieListing() {
  const movies = useSelector(getAllMovies);
  let renderMovies = '';
  renderMovies =
    movies.Response === 'True' ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      {/* <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div> */}
    </div>
  );
}
