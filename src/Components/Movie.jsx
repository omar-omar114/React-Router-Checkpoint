import {useParams} from 'react-router-dom';
import './Movies.css';

const Movie = (props) => {
    const params = useParams()
    const findMovie = props.data.find(e => e.id === parseInt(params.movieId))
    return(
        <div className="movieStyle">
            <img src={findMovie.img} width='500' height='500'></img>
            <div style={{display: 'block', padding: '5%'}}>
            <h1>{findMovie.title}</h1>
            <p>{findMovie.description}</p>
            </div>
        </div>   
    )
}

export default Movie