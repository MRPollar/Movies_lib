import { useState, useEffect } from 'react';
import { BsStarFill } from 'react-icons/bs';
import { useParams, useNavigate } from 'react-router-dom';

import '../styles/components/movieGrid.scss'

import CardSerie from '../components/CardSerie';
import Pagination from '../components/Pagination';
import Loading from '../components/Loading';

const apiURL = import.meta.env.VITE_API_TV;
const apiKey = import.meta.env.VITE_API_KEY;

const PopularS = () => {
   const numPage = useParams().page;
   const navigate = useNavigate();

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
      if(page < totalPages) navigate(`/series/popular/${page + 1}`);
   }
   const previousPage = (e) => {
      e.preventDefault();
      if(page > 1) navigate(`/series/popular/${page - 1}`);
   }

   return(
      <section className="component">
         <div className="container">
            <h1><BsStarFill className="icon_title"/>Popular TV</h1>
            {popular.length === 0 && <Loading/>}
            {popular.length > 0 && <div className='container_card'>
               {popular.map(serie => (
                  <CardSerie key={serie.id} serie={serie}/>
               ))}
            </div>}
            <Pagination
               previous={previousPage}
               next={nextPage}
               page={page}
            />
         </div>
      </section>
   )
}

export default PopularS;