import React, {Component} from 'react';
import axios from 'axios';
import SearchDetails from './SearchDetails';
import ApiKeys from '../ApiKeys.js';

class Search extends Component {
    constructor() {
        super()
        this.state={
            movies:[],
            userInput:'',
            posts:[]
        }
        this.saveToFavorites = this.saveToFavorites.bind(this)
    }
    search(val){
        const {searchFn} = this.props
        let userInput = val;
        this.setState({
          userInput
        })
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${ApiKeys.key}&language=en-US&query=${userInput}&page=1&include_adult=false
        `)
        .then(res => {
          const posts = res.data.results.map(obj => ({id:obj.id, title: obj.title, poster:obj.poster_path, rating:obj.vote_average, total_votes:obj.vote_count}));
          this.setState({ posts });
        });
      }
    // Save movie to Favorites
    // Query param #2
      saveToFavorites(id){
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKeys.key}&language=en-US`)
        .then(res => {
          let movie = res.data;
        axios.post(`api/favorites`, movie).then( res => {
          // console.log(movie)
            this.setState({
            //   favoriteMovies : res.data,
              userInput:'',
              posts:[]
            })
            this.props.update(res.data)
          });
        });
      }
      render() {
          return(
            // {/* SEARCH RESULTS */}
            <div className="search-results">
            {/* SEARCH INPUT*/}
                <div className="search-box">
                    <input className="search-input" 
                    placeholder="Search Movies" 
                    value={ this.state.userInput }
                    onChange={ ( e ) => this.search( e.target.value ) } 
                    />
                </div>

                {this.state.posts.map( post => (
                    <SearchDetails
                    saveToFavorites={this.saveToFavorites}
                    rating={post.rating}
                    id={post.id}
                    title={post.title}
                    poster={post.poster}
                    />
                ))
                }
            </div>
          )
      }

}
export default Search