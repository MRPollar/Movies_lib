import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {BsSearch} from 'react-icons/bs'


const FormSearch = () => {
   const [search, setSearch] = useState("");

   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      const searchInput = document.querySelector("#search");
      
      if(!search) return;
      navigate(`/search?q=${search}`);

      searchInput.value = "";
      setSearch("");
   }

   return (
      <form className="search" onSubmit={handleSubmit}>
            <input id="search" type='text' placeholder="Search..." onChange={(e) => setSearch(e.target.value)} values={search}/>
            <button type='submit'>
               <BsSearch className='icon_search'/>
            </button>
      </form>
   )
}

export default FormSearch;