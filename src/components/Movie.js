import React from 'react'

const Movie = ({movie}) => {
  
  return (
    <div className='movies-card'>
      <div  className='movies-card__poster'>
        <img className='movies-card__img' src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}></img>
      </div>
      <div className='movies-card__data' >
        <h3>{movie.title}</h3>
        <p>{movie.vote_average ? movie.vote_average : 'TBA' }</p>
        <p>{movie.id}</p>
        <button>+</button>
        
      </div>
      
    </div> 
  )
}

export default Movie;