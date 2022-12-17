import { useState, useEffect } from 'react';
import { BsStarFill } from 'react-icons/bs';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { useParams, useNavigate } from 'react-router-dom';

import '../styles/components/movieGrid.scss'

import CardSerie from '../components/CardSerie';
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

   const nextPage = () => {
      if(page < totalPages) navigate(`/series/popular/${page + 1}`);
   }
   const previousPage = () => {
      if(page > 1) navigate(`/series/popular/${page - 1}`);
   }

   return(
      <section className="component">
         <div className="container">
            <h1><BsStarFill className="icon_title"/>Popular series</h1>
            {popular.length === 0 && <Loading/>}
            <div className='container_card'>
               {popular.length > 0 && popular.map(serie => (
                  <CardSerie key={serie.id} serie={serie}/>
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

export default PopularS;