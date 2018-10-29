import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

// Components
import MyHeader from './components/Header';
import Favorites from './components/Favorites';
import Search from './components/Search';
import Trending from './components/Trending';

class App extends Component {
  constructor(){
  super()
  this.state = {
    favoriteMovies:[]
}
this.updateMovies = this.updateMovies.bind(this)
};
componentWillMount() {
  axios.get('api/favorites').then( res => {
    this.setState({
      favoriteMovies : res.data
    })
  //   console.log(this.state.favoriteMovies)
  });
  }
  updateMovies(arr){
    console.log(this)
    this.setState({
      favoriteMovies : arr
    })
  }
  render() {
    return (
      <div className="App">
      <MyHeader
      text={'Best Movies Ever'}
      />
      <Trending/>
      <Search
      update={this.updateMovies}
      />
      <Favorites
      update={this.updateMovies}
      favoriteMovies={this.state.favoriteMovies}
      />
      <div className='footer'>
      <MyHeader
      text={'Thanks to The Movie Database'}
      />
      </div>
      </div>
    );
  }
}

export default App;
