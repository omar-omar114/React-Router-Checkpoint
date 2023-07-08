import {Link } from 'react-router-dom';
import './Movies.css';

const Movies = (props) => {

  return (
    <div className="listMovies">
      
      {props.data.map((e) => (
        <div key={e.id}>
          <img src={e.img} alt={e.title} width="240" height="240" />
          <Link to={`/movies/${e.id}`}> <h4>{e.title}</h4> </Link>
        </div>
      ))}
    </div>
  );
};

export default Movies;
