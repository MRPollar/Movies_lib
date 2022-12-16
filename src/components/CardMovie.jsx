
const imgMovie = import.meta.env.VITE_IMG;

const CardMovie = ({movie}) => {
   console.log(movie)
   const imgUrl = `${imgMovie}${movie.poster_path}`
   return (
      <div className="card">
         <img src={imgUrl} alt={movie.title}/>
         <div className="text">
            <h1>{movie.title}</h1>
         </div>
      </div>
   )
}

export default CardMovie