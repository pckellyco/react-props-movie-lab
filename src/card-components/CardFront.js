import React, { Component } from 'react';
import CardBack from './CardBack';

export default class CardFront extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}

