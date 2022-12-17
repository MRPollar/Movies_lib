import {AiFillStar} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const imgMovie = import.meta.env.VITE_IMG;

const CardSerie = ({serie}) => {
   const imgUrl = `${imgMovie}${serie.poster_path}`
   return (
      <div className="card">
         <img src={imgUrl} alt={serie.name}/>
         <div className="text">
            <h3><AiFillStar className='icon_score'/>{serie.vote_average}</h3>
            <h1>{serie.name}</h1>
            <Link to={`/serie/${serie.id}`}>overview</Link>
         </div>
      </div>
   )
}

export default CardSerie