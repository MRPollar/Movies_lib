import { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSearchParams } from 'react-router-dom';
import CardMovie from '../components/CardMovie';
import Loading from '../components/Loading';

import '../styles/components/movieGrid.scss'

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
   const [searchParam] = useSearchParams();
   const search = searchParam.get("q");

   const [movies, setMovies] = useState([]);

   const searchmovies = async (url) => {
      setMovies([]);
      const res = await fetch(url);
      const arr = await res.json();
      setMovies(arr.results);
   }
   useEffect(() => {
      const mountURL = `${searchUrl}api_key=${apiKey}&query=${search}`;
      searchmovies(mountURL);
   },[search])

   return (
      <section className="component">
         <div className="container">
            <h1><AiOutlineSearch className="icon_title"/>resultados para: {search}</h1>
            {movies.length == 0 && <Loading/>}
            <div className="container_card">
               {movies.length > 0 && movies.map((movie) => (
                  <CardMovie key={movie.id} movie={movie}/>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Search;