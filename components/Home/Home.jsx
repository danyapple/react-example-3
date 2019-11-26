import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <input type='text' onKeyDown={this.search}/>
    )
  }
}