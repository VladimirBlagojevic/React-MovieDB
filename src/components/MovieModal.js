import React from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import {addMovie} from '../actions/movies'
import {addSeries} from '../actions/series'
import {addMovieToWatchlist} from '../actions/watchlist';
import {addSeriesToWatchlist} from '../actions/watchlist';


const MovieModal = ({mediaItem,dispatch,isOpen,toggleModal,movies,series,watchlist,resetMediaItemState}) => {

  const dispatchLogicHelperFunction = (dispatchMovie,dispatchSeries,moviesArray=watchlist,seriesArray=watchlist) => {

    //* Check is media movie or series, (if have first_air_date its a serie )
    if(mediaItem.first_air_date){

      //* Avoid adding duplicate series to the store logic
      const filterSeries=seriesArray.filter(({ id }) => id !== mediaItem.id);

      if(seriesArray.length === filterSeries.length){
        dispatch(dispatchSeries({
          id:mediaItem.id,
          title:mediaItem.name,
          overview: mediaItem.overview,
          vote_average:mediaItem.vote_average,
          poster_path: mediaItem.poster_path,
          air_date: mediaItem.first_air_date,
          number_of_episodes:mediaItem.number_of_episodes,
          number_of_seasons: mediaItem.number_of_seasons,
          genres:"Action/Drama",
          popularity:mediaItem.popularity,
          cast:mediaItem.credits.cast.slice(0,5),
        }));
      };
    }
    else {

      //* Avoid adding duplicate movies to the store logic
      const filterMovies=moviesArray.filter(({ id }) => id !== mediaItem.id);

      if(moviesArray.length === filterMovies.length){
        dispatch(dispatchMovie({
          id:mediaItem.id,
          title:mediaItem.title,
          overview: mediaItem.overview,
          vote_average:mediaItem.vote_average,
          poster_path: mediaItem.poster_path,
          release_date:mediaItem.release_date,
          runtime:mediaItem.runtime,
          budget:mediaItem.budget,
          genres:"Action/Drama",
          popularity:mediaItem.popularity,
          cast:mediaItem.credits.cast.slice(0,5)
        }))
      }
    };
    
    //* Close Modal and reset MediaItem state
    setTimeout(() => {
      resetMediaItemState();
    }, 400);
    
    toggleModal();
  }

  //* Add Movie or Series to the colection
  const addToCollection = () => {
    dispatchLogicHelperFunction(addMovie,addSeries,movies,series)
  }

  //* Add Movie or Series to the Watchlist
  const addToWatchlist = () => {
    dispatchLogicHelperFunction(addMovieToWatchlist,addSeriesToWatchlist)
  }

  return (
    <Modal
    isOpen={isOpen}
    contentLabel={'Movie Details'}
    ariaHideApp={false}
    className="modal"
    closeTimeoutMS={400}
    >
      <div className='modal__img'>
       <img  src={`https://image.tmdb.org/t/p/w300/${mediaItem.poster_path}`}></img>
      </div>
      <div className='modal__content'>
        {mediaItem.first_air_date  ? <h1>{mediaItem.name}</h1> : <h1>{mediaItem.title}</h1>}
        <p>{mediaItem.overview}</p>
        <button onClick={addToCollection}>Add to Collection</button>
        <button onClick={addToWatchlist}>Add to Watchlist</button>
      </div>
    </Modal>
  )
}

const mapStateToProps = (state) => ({
  movies:state.movies,
  series:state.series,
  watchlist:state.watchlist
});

export default connect(mapStateToProps)(MovieModal);
