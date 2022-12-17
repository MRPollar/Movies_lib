import FormSearch from './FormSearch';
import Menu from './Menu';

import { Link } from 'react-router-dom';
import { BiCameraMovie } from 'react-icons/bi';

const Header = ()=>(
   <>
      <header>
         <div className="container">
            <div className="logo">
               <Menu/>
               <h1><Link to='/'><BiCameraMovie className='icon_menu'/> Movie<span>BOOK</span></Link></h1>
            </div>
            <FormSearch/>
         </div>
      </header>
   </>
)

export default Header;