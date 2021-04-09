import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    const posterURL = this.props.poster
    console.log(posterURL)
    return (
      <div className="card-front" style={{backgroundImage: `url(${posterURL})`}}>
      </div>
    )
  }
}
