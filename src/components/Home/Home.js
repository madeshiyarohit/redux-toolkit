import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import movieApi from '../../common/apis/movieApi';
import { APIKEY } from '../../common/apis/apiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlide';

export default function Home() {

  const movieText = 'Harry';
  const dispatch = useDispatch();

  
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKEY}&s=${movieText}&type=movie`)
        .catch((err) => console.log('Erros', err));
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className="banner-image"></div>
      <MovieListing />
    </div>
  );
}
