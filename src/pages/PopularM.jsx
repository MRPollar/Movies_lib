import { useState, useEffect } from 'react';
import { BsStarFill } from 'react-icons/bs';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { useParams, useNavigate } from 'react-router-dom';

import '../styles/components/movieGrid.scss'

import CardMovie from '../components/CardMovie';
import Loading from '../components/Loading';

const apiURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const PopularM = () => {
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

   const nextPage = () => {
      if(page < totalPages) navigate(`/movies/popular/${page + 1}`);
   }
   const previousPage = () => {
      if(page > 1) navigate(`/movies/popular/${page - 1}`);
   }

   return(
      <section className="component">
         <div className="container">
            <h1><BsStarFill className="icon_title"/>Popular movies</h1>
            {popular.length === 0 && <Loading/>}
            <div className='container_card'>
               {popular.length > 0 && popular.map(movie => (
                  <CardMovie key={movie.id} movie={movie}/>
               ))}
            </div>
            <div className='page' style={{color:'white'}}>
               <button className='button' onClick={previousPage}><AiOutlineArrowLeft/></button>
               <div className='page_count'>{page}</div>
               <button className='button' onClick={nextPage}><AiOutlineArrowRight/></button>
            </div>
         </div>
      </section>
   )
}

export default PopularM;