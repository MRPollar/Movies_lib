import { useState, useEffect } from "react";
import { CgFilm } from 'react-icons/cg';
import { MdSlideshow } from 'react-icons/md';
import '../styles/components/movieGrid.scss'

import CardMovie from "../components/CardMovie";
import CardSerie from "../components/CardSerie";
import Loading from '../components/Loading';

const moviesURL = import.meta.env.VITE_API
const seriesURL = import.meta.env.VITE_API_TV
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
   const [topMovies, setTopMovies] = useState([]);
   const [topSeries, setTopSeries] = useState([]);

   const getTopMovies = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      setTopMovies(data.results)
   }
   const getTopSeries = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      setTopSeries(data.results)
   }

   useEffect(() => {
      const topMoviesUrl = `${moviesURL}top_rated?api_key=${apiKey}`;
      const topSeriesUrl = `${seriesURL}top_rated?api_key=${apiKey}`;
      getTopMovies(topMoviesUrl);
      getTopSeries(topSeriesUrl);
   },[])

   return(
      <section className="component">
         <div className="container">
            <h1><CgFilm className="icon_title"/>Top films</h1>
            {topMovies.length == 0 && <Loading/>}
            <div className="container_card">
               {topMovies.length > 0 && topMovies.map((movie,index) => {
                  if(index < 6){
                     return <CardMovie key={movie.id} movie={movie}/>
                  }
               })}
            </div>
            <h1><MdSlideshow className="icon_title"/>Top series</h1>
            {topSeries.length === 0 && <Loading/>}
            <div className="container_card">
               {topSeries.length > 0 && topSeries.map((serie,index) => {
                  if(index < 6){
                     return <CardSerie key={serie.id} serie={serie}/>
                  }
               })}
            </div>
         </div>
      </section>
   )
}

export default Home;