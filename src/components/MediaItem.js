import React from 'react'

const MediaItem = ({mediaItem,toggleModal,getSingleMovie}) => {
  
  const viewDetails= (e) => {
    getSingleMovie(mediaItem.id,mediaItem.media_type);
    setTimeout(() => {
      toggleModal();
    }, 400);
    
  }
  return (
    <div className='movies-card'>
      <div  className='movies-card__poster'>
        <img className='movies-card__img' src={`https://image.tmdb.org/t/p/w200/${mediaItem.poster_path}`}></img>
      </div>
      <div className='movies-card__data' >
        <h3>{mediaItem.title}</h3>
        <p>{mediaItem.vote_average ? mediaItem.vote_average : 'TBA' }</p>
        <p>{mediaItem.id}</p>
        <button onClick={viewDetails} >+</button>
      </div>
    </div> 
  )
}

export default MediaItem;
 /*
  RESPONSIVE-try
 const breakpoints = {
    desktop: 1040,
    tablet: 840,
    mobile: 540
  };
  let imgWidth;
  if (window.innerWidth > breakpoints.tablet) {
    // do stuff for desktop
    imgWidth='w342';
  } else if (window.innerWidth > breakpoints.mobile) {
    // do stuff for tablet
     imgWidth='w300';
  } else if (window.innerWidth <= breakpoints.mobile) {
    // do stuff for mobile
    imgWidth='w200';
  }*/
//<img className='movies-card__img' src={`https://image.tmdb.org/t/p/w92/${props.movie.poster_path}`}></img>