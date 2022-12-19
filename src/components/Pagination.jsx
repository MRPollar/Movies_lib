import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Pagination = (props) => {
   return (
      <div className='page' style={{color:'white'}}>
         <button info="#init_card" className='button' onClick={props.previous}><AiOutlineArrowLeft/></button>
         <div className='page_count'>{props.page}</div>
         <button info="#init_card" className='button' onClick={props.next}><AiOutlineArrowRight/></button>
      </div>
   )
}

export default Pagination;