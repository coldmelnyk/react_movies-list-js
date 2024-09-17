import './Page.scss';
import { MovieList } from '../MovieList/MovieList';
import { Sidebar } from '../Sidebar/Sidebar';

export function Page() {
  return (
    <div className="page">
      <div className="page-content">
        <MovieList />
      </div>

      <Sidebar />
    </div>
  );
}
