import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineFieldNumber } from 'react-icons/ai'
import { MdSlideshow } from 'react-icons/md';
import {
   BsFillFileEarmarkTextFill,
   BsCalendarEvent,
   BsFilm
} from 'react-icons/bs'
import Loading from '../components/Loading';

import '../styles/components/movie.scss';

const searchUrl = import.meta.env.VITE_API_TV;
const apiKey = import.meta.env.VITE_API_KEY;
const apiImg = import.meta.env.VITE_IMG_HIGH;

const Movie = () => {
   const { id } = useParams();
   const [serie, setSerie] = useState(null);

   const getmoviedata = async (url) => {
      const req = await fetch(url);
      const res = await req.json();
      setSerie(res);
   }
   useEffect(() => {
      const movieUrl = `${searchUrl}${id}?api_key=${apiKey}`;
      getmoviedata(movieUrl);
   },[id]);

   return(
      <section className="movie_info">
         <div className="container">
            {serie === null && <Loading/>}
            {serie !== null && 
               <>
                  <img src={`${apiImg}${serie.backdrop_path}`}/>
                  <div className="text">
                     <h1>{serie.name}</h1>
                     <div className="info">
                        <h2><MdSlideshow/>Seasons:</h2>
                        <p>{serie.seasons.length > 1 ? serie.seasons.length+" seasons":serie.seasons.length+" season"}</p>
                     </div>
                     <div className="info">
                        <h2><AiOutlineFieldNumber/>Number of episodes:</h2>
                        <p>{serie.number_of_episodes} episodes</p>
                     </div>
                     <div className="info">
                        <h2><BsCalendarEvent/>Release date:</h2>
                        <p>{serie.first_air_date}</p>
                     </div>
                     <div className="info">
                        <h2><BsFilm/>Genre:</h2>
                        <p>{serie.genres.map((genrer, index) => {
                           if(index === serie.genres.length -1){
                              return genrer.name+"."
                           } else {
                              return genrer.name+", "
                           }

                        })}</p>
                     </div>
                     <div className="info description">
                        <h2><BsFillFileEarmarkTextFill/>Overview:</h2>
                        <p>{serie.overview}</p>
                     </div>
                  </div>
               </>
            }
         </div>
      </section>
   )
}

export default Movie;