import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
   BsGraphUp,
   BsWallet2,
   BsHourglassSplit,
   BsFillFileEarmarkTextFill,
   BsFilm
} from 'react-icons/bs'
import Loading from '../components/Loading';

import '../styles/components/movie.scss';

const searchUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const apiImg = import.meta.env.VITE_IMG_HIGH;

const Movie = () => {
   const { id } = useParams();
   const [movie, setMovie] = useState(null);

   const getmoviedata = async (url) => {
      const req = await fetch(url);
      const res = await req.json();
      setMovie(res);
   }
   useEffect(() => {
      const movieUrl = `${searchUrl}${id}?api_key=${apiKey}`;
      getmoviedata(movieUrl);
   },[id]);

   return(
      <section className="movie_info">
         <div className="container">
            {movie === null && <Loading/>}
            {movie !== null && 
               <>
                  <img src={`${apiImg}${movie.backdrop_path}`}/>
                  <div className="text">
                     <h1>{movie.title}</h1>
                     <div className="info">
                        <h2><BsWallet2/>Budget:</h2>
                        <p>{movie.budget}</p>
                     </div>
                     <div className="info">
                        <h2><BsGraphUp/>Revenue:</h2>
                        <p>{movie.revenue}</p>
                     </div>
                     <div className="info">
                        <h2><BsHourglassSplit/>Duration:</h2>
                        <p>0{Math.floor(movie.runtime / 60)}:{movie.runtime % 60} hours</p>
                     </div>
                     <div className="info">
                        <h2><BsFilm/>Genrers:</h2>
                        <p>{movie.genres.map((genrer, index) => {
                           if(index === movie.genres.length -1){
                              return genrer.name+"."
                           } else {
                              return genrer.name+", "
                           }

                        })}</p>
                     </div>
                     <div className="info description">
                        <h2><BsFillFileEarmarkTextFill/>Overview:</h2>
                        <p>{movie.overview}</p>
                     </div>
                  </div>
               </>
            }
         </div>
      </section>
   )
}

export default Movie;