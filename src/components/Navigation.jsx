import {Link} from 'react-router-dom'

const Navigation = ()=>{
   const openMenu = (e) => {
      const nav = document.querySelector('#nav')
      e.target.classList.toggle('active')
      nav.classList.toggle('active');
   }

   return(
      <nav>
         <button className='toggleButton' onClick={openMenu}></button>
         <ul id='nav'>
            <div className='header_menu'>
               <h1>Movie<span>List</span></h1>
            </div>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/movie/avatar-2'>Comédia</Link></li>
            <li><Link to='/search'>Ação</Link></li>
            <li><Link to='/movies/aventura'>Aventura</Link></li>
            <li><Link to='/movies/romance'>Romance</Link></li>
         </ul>
      </nav>
   )
}

export default Navigation;