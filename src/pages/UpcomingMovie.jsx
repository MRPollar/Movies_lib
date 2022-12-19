import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MdOutlineUpcoming } from 'react-icons/md';

import CardMovie from '../components/CardMovie';
import Pagination from "../components/Pagination";
import Loading from '../components/Loading';

import '../styles/components/movieGrid.scss'

const apiUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const UpcomingMovie = () => {
   const numPage = useParams().page;
   const navigate = useNavigate();

   const [upMovie, setUpMovie] = useState([]);
   const [page, setPage] = useState(numPage);
   const [totalPages, setTotalPages] = useState(0)

   useEffect(() => {
      setPage(Number.parseInt(numPage));
   },[numPage])

   const getUpcomingMovie = async (url) => {
      const req = await fetch(url)
      const res = await req.json();
      setTotalPages(res.total_pages)
      setUpMovie(res.results);
   }

   useEffect(() => {
      const mountUrl = `${apiUrl}upcoming?api_key=${apiKey}&page=${page}`;
      getUpcomingMovie(mountUrl);
   },[page]);

   const nextPage = () => {
      if(page < totalPages) navigate(`/movies/upcoming/${page + 1}`);
   }
   const previousPage = () => {
      if(page > 1) navigate(`/movies/upcoming/${page - 1}`);
   }

   return (
      <section className="component">
         <div className="container">
            <h1><MdOutlineUpcoming className="icon_title"/>Upcoming movies</h1>
            {upMovie.length === 0 && <Loading/>}
            {upMovie.length > 0 && <div className="container_card">
               {upMovie.map(movie => <CardMovie key={movie.id} movie={movie}/>)}
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

export default UpcomingMovie;