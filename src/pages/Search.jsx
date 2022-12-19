import { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSearchParams } from 'react-router-dom';

import CardMovie from '../components/CardMovie';
import CardSerie from '../components/CardSerie';
import Loading from '../components/Loading';

import '../styles/components/movieGrid.scss'

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
   const [searchParam] = useSearchParams();
   const search = searchParam.get("q");

   const [data, setData] = useState([]);

   const searchmovies = async (url) => {
      setData([]);
      const res = await fetch(url);
      const arr = await res.json();
      setData(arr.results);
   }
   useEffect(() => {
      const mountURL = `${searchUrl}api_key=${apiKey}&query=${search}`;
      searchmovies(mountURL);
   },[search])

   return (
      <section className="component">
         <div className="container">
            <h1><AiOutlineSearch className="icon_title"/>resultados para: {search}</h1>
            {data.length == 0 && <Loading/>}
            <div className="container_card">
               {data.length > 0 && data.map((movie) => {
                  if(movie.media_type == "movie"){
                     return <CardMovie key={movie.id} movie={movie}/>
                  } else if(movie.media_type == "tv"){
                     let serie = movie;
                     return <CardSerie key={serie.id} serie={serie}/>
                  }
               })}
            </div>
         </div>
      </section>
   )
}

export default Search;