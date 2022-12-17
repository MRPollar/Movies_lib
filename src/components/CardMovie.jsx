import {AiFillStar} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const imgMovie = import.meta.env.VITE_IMG;

const CardMovie = ({movie, showLink = true}) => {
   const imgUrl = `${imgMovie}${movie.poster_path}`
   return (
      <div className="card">
         <img src={imgUrl} alt={movie.title}/>
         <div className="text">
            <h3><AiFillStar className='icon_score'/>{movie.vote_average}</h3>
            <h1>{movie.title}</h1>
            {showLink && <Link to={`/movie/${movie.id}`}>overview</Link>}
         </div>
      </div>
   )
}

export default CardMovie