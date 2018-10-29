import React, {Component} from 'react';
import axios from 'axios';
import TrendingDetails from './TrendingDetails'
import ApiKeys from '../ApiKeys.js';

class Trending extends Component{
  constructor(){
    super()
    this.state={
      trending:[],
      trendingWeek:[]
    }
  }
componentWillMount(){
    axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${ApiKeys.key}`)
    .then(res => {
      const trending = res.data.results.map(obj => ({id:obj.id, title: obj.title, poster:obj.poster_path, rating:obj.vote_average, total_votes:obj.vote_count}));
      this.setState({ trending });
    });

    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${ApiKeys.key}`)
    .then(res => {
      const trendingWeek = res.data.results.map(obj => ({id:obj.id, title: obj.title, poster:obj.poster_path, rating:obj.vote_average, total_votes:obj.vote_count}));
      this.setState({ trendingWeek });
    });
  }

  render(){
    return(
      <div>
      <div className='trending-box day'>
            {this.state.trending.map( trending => (
      <TrendingDetails
      title={trending.title}
      poster={trending.poster}
      rating={trending.rating}
      />
            ))}
      </div>
      <div className='trending-box week'>
            {this.state.trendingWeek.map( trending => (
      <TrendingDetails
      title={trending.title}
      poster={trending.poster}
      rating={trending.rating}
      />
            ))}
      </div>
</div>
    )
  }
}

export default Trending;

// id:
// 260513
// poster:
// "/x1txcDXkcM65gl7w20PwYSxAYah.jpg"
// rating:
// 7.6
// title:
// "Incredibles 2"
// total_votes:
// 3121