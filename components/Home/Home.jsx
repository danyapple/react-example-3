import React, { Component } from 'react';
import { discoverMovies } from '../../sevices/MovieDBService';

export default class Home extends Component {
  constructor(props) {
    super(props);

    discoverMovies().then(res => {
      console.log(res.results);
    });
  }
  search = (e) => {
    const query = e.target.value;

    if(query && query.trim().length) {}
  };
  render() {
    return (
      <input className='form-control text-center' type='text' onKeyUp={this.search}/>
    );
  };
}