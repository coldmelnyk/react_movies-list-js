import './Page.scss';
import { MovieList } from '../MovieList/MovieList';
import { Sidebar } from '../Sidebar/Sidebar';
import moviesFromServer from '../../api/movies.json';

export function Page() {
  return (
    <div className="page">
      <div className="page-content">
        <MovieList movies={moviesFromServer} />
      </div>

      <Sidebar />
    </div>
  );
}
