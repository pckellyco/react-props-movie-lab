import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    const posterURL = this.props.poster
    return (
      <div className="card-front" style={{backgroundImage: `url(${posterURL})`}}>
      </div>
    )
  }
}
