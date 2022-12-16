
import {BsSearch} from 'react-icons/bs'
const FormSearch = () => (
   <form className="search">
      <div className='container'>
         <BsSearch className='icon_search'/>
         <input type='text' placeholder="Busca"/>
         <button type='submit'>Buscar filme</button>
      </div>
   </form>
)

export default FormSearch;