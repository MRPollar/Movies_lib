import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineStar, AiOutlineCheckCircle } from 'react-icons/ai';

import '../styles/components/menu.scss';

const Menu = () => {

   const menuActive = () => {
      const menuContainer = document.getElementById('menuContainer');
      const btnMenu = document.getElementById('btnMenu');
      btnMenu.classList.toggle('active');
      menuContainer.classList.toggle('active');
   }

   return(
      <>
         <button className='btn_toggle' id='btnMenu' onClick={menuActive}></button>
         <nav className='menu' id='menuContainer'>
            <ul>
               <li><Link to="/" onClick={menuActive}><AiOutlineHome/>Home</Link></li>
               <li><h2>Movie</h2></li>
               <li><Link to="movies/popular/1" onClick={menuActive}><AiOutlineStar/>Popular</Link></li>
               <li><Link to="movies/recent/1" onClick={menuActive}><AiOutlineCheckCircle/>Most recent</Link></li>
               <li><h2>TV</h2></li>
               <li><Link to="series/popular/1" onClick={menuActive}><AiOutlineStar/>Popular</Link></li>
               <li><Link to="series/recent/1" onClick={menuActive}><AiOutlineCheckCircle/>Most recent</Link></li>
            </ul>
         </nav>
      </>
   )
}

export default Menu;