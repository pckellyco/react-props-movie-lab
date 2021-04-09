import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // console.log('hiiii')
    movieData.map(movie => {
      return <MovieCard 
        title={movie.title} 
        IMBRating={movie.IMDBRating}
        genres={movie.genres}
        poster={movie.poster}
      />
    })
    
    // map over your movieData array and return an array of the correct JSX
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
        <MovieCard />
      </div>
    )
  }
}
