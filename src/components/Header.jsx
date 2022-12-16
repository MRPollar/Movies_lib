import Navigation from './Navigation';
import FormSearch from './FormSearch';

import { Link } from 'react-router-dom';
import { BiCameraMovie } from 'react-icons/bi';

const Header = ()=>(
   <>
      <header>
         <div className="container">
            <div className="logo">
               <h1><Link to='/'><BiCameraMovie className='icon_menu'/> Movie<span>List</span></Link></h1>
            </div>
            <Navigation/>
         </div>
      </header>
      <FormSearch/>
   </>
)

export default Header;