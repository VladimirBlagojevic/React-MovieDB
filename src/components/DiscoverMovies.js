import React from 'react';
import axios from 'axios';
import MediaItem from './MediaItem';
import MovieModal from '../components/MovieModal';


export default class DiscoverMovies extends React.Component {
  state={
    apiKey:'539c534311e26fffb4df5b09f548b2fb',
    search:'',
    modal:false,
    media:[],
    mediaItem:{}
  }

  componentDidMount(){
    //* When component mount set media array to list of trending movies from api call
    this.setState(
      () => {
      axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.state.apiKey}&language=en-US&page=1`)
        .then(res => this.setState({media:res.data.results}))
        .catch(err => console.log(err))
    });
    console.log('hi');
  }


  //* set state of the search property to input text, and then get new media array with that query
  handleChange= (e) => {
    this.setState({
      [e.target.name]:e.target.value}, () => {
      axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${this.state.apiKey}&language=en-US&query=${this.state.search}&page=1&include_adult=false`)
        .then(res => this.setState({media:res.data.results}))
        .catch(err => console.log(err))
    });
  }

  //* Using mediaItem id and type of the media set  mediaItem object to movie or series
  getSingleMovie= (id,type) => {
    if(type === 'tv'){
      axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${this.state.apiKey}&language=en-US&append_to_response=credits`)
        .then(res => this.setState({mediaItem:res.data}))
        .catch(err => console.log(err))
    }
    else if (type === 'movie' || type === undefined){
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.state.apiKey}&language=en-US&append_to_response=credits`)
        .then(res => this.setState({mediaItem:res.data}))
        .catch(err => console.log(err))
    } 
  }

  toggleModal= () => {
   this.setState(prevState => ({modal:!prevState.modal}))
  }

  resetMediaItemState = () => {
    this.setState(() => ({
      mediaItem:{}
    }));
  }

  render() {
    
    return (
      <main className='main-container scrollbar' id="style-1">
        <div className='search-container'>
          <input type="text" name='search' value={this.state.search} onChange={this.handleChange} placeholder='Search Movies'/>
          <select name="showBy" >
            <option value="trend">Trending</option>
            <option value="top">Top rated</option>
          </select>
        </div>
        <div className='movies'>
          {this.state.media.map( mediaItem => mediaItem.poster_path ? <MediaItem mediaItem={mediaItem}  key={mediaItem.id} getSingleMovie={this.getSingleMovie} toggleModal={this.toggleModal}/> : null)}
        </div>
        <MovieModal isOpen={this.state.modal} toggleModal={this.toggleModal} mediaItem={this.state.mediaItem} resetMediaItemState={this.resetMediaItemState}/>
      </main>
    )
  }
}

