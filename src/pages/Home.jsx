import { useState, useEffect } from "react";
import { CgFilm } from 'react-icons/cg';
import '../styles/components/movieGrid.scss'

import CardMovie from "../components/CardMovie";
import Loading from '../components/Loading';

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
   const [topMovies, setTopMovies] = useState([]);

   const getTopMovies = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      setTopMovies(data.results)
   }

   useEffect(() => {
      const topUrl = `${moviesURL}top_rated?api_key=${apiKey}`
      getTopMovies(topUrl);
   },[])

   return(
      <section className="component">
         <div className="container">
            <h1><CgFilm className="icon_title"/>Top films</h1>
            {topMovies.length == 0 && <Loading/>}
            <div className="container_card">
               {topMovies.length > 0 && topMovies.map((movie) => (
                  <CardMovie key={movie.id} movie={movie}/>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Home;