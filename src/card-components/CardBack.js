import React, { Component } from 'react';
import zero from '../assets/stars/0-stars.png'
import one from '../assets/stars/1-stars.png'
import two from '../assets/stars/2-stars.png'
import three from '../assets/stars/3-stars.png'
import four from '../assets/stars/4-stars.png'
import five from '../assets/stars/5-stars.png'

const imgMapper = {0: zero, 1: one, 2: two, 3: three, 4: four, 5: five}

export default class CardBack extends Component {

  generateRatingElement = () => {
    console.log(this.props.IMDRating) // console.log is not working, I believe its because the cards are not attached
    return (
      (this.props.IMDRating !== null)
          ? <img src={imgMapper[this.props.IMDRating]} alt='' />
          : <h4>No Rating Found</h4>
    )
  }

  render() {
    const movieGenres = this.props.genres.join(', ')
    console.log(movieGenres)
    return (
      <div className="card-back">
        <h3 className="title">{this.props.title}</h3>
        <span />
        <generateRatingElement />
        <span />
        <h5 className="genres">{movieGenres}</h5>
      </div>
    )
  }
}
