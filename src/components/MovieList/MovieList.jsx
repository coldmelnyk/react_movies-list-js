/* eslint-disable indent */

import { MovieCard } from '../MovieCard';
import './MovieList.scss';
import moviesFromServer from '../../api/movies.json';

export function MovieList() {
  return (
    // <div className="movies">
    //   {moviesFromServer.length !== 0
    //     ? moviesFromServer.map(movie => (
    //         <MovieCard movie={movie} key={movie.imdbId} />
    //       ))
    //     : ''}
    // </div>

    <div className="movies">
      {moviesFromServer.map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))}
    </div>
  );
}
