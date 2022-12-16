import { useState, useEffect } from "react";
import { CgFilm } from 'react-icons/cg';

import CardMovie from "../components/CardMovie";

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
            <div className="container_card">
               {topMovies === 0 && <p>Carregando...</p>}
               {topMovies.length > 0 && topMovies.map((movie) => (
                  <CardMovie key={movie.title} movie={movie}/>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Home;