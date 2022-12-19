import { useState, useEffect } from 'react';
import { BsStarFill } from 'react-icons/bs';
import { useParams, useNavigate } from 'react-router-dom';

import '../styles/components/movieGrid.scss'

import CardMovie from '../components/CardMovie';
import Pagination from '../components/Pagination';
import Loading from '../components/Loading';

const apiURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const PopularM = () => {
   const numPage = useParams().page;
   const navigate = useNavigate();
   const init_card = document.getElementById("#init_card");

   const [popular, setPopular] = useState([]);
   const [page, setPage] = useState(numPage)
   const [totalPages, setTotalPages] = useState(0);

   useEffect(() => {
      setPage(Number.parseInt(numPage));
   },[numPage])

   const getPopularMovies = async (url) => {
      const req = await fetch(url);
      const res = await req.json();
      setTotalPages(res.total_pages);
      setPopular(res.results);
   }
   
   useEffect(() => {
      const mountUrl = `${apiURL}popular?api_key=${apiKey}&page=${String(page)}`;
      getPopularMovies(mountUrl);
   },[page]);

   const nextPage = (e) => {
      e.preventDefault();
      if(page < totalPages) navigate(`/movies/popular/${page + 1}`);
   }
   const previousPage = (e) => {
      e.preventDefault();
      if(page > 1) navigate(`/movies/popular/${page - 1}`);
   }

   return(
      <section className="component" id="init_card">
         <div className="container">
            <h1><BsStarFill className="icon_title"/>Popular movies</h1>
            {popular.length === 0 && <Loading/>}
            <div className='container_card'>
               {popular.length > 0 && popular.map(movie => (
                  <CardMovie key={movie.id} movie={movie}/>
               ))}
            </div>
            <Pagination
               previous={previousPage}
               next={nextPage}
               page={page}
            />
         </div>
      </section>
   )
}

export default PopularM;