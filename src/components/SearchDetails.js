import React, { Component } from 'react';
import Logo from './Logo';

// Components
// import Details from './Details';

class SearchDetails extends Component {

    render() {
      let urlPath = "https://image.tmdb.org/t/p/w300_and_h450_bestv2"
      let {id,title,overview,poster,rating,saveToFavorites} = this.props
      // console.log(title)
      return (

        <div className="relative search-result">
         <img className=" absolute search-poster" src={urlPath+poster}/>
         <div className="search-text">
            <h4 style={{fontWeight:'900',margin:'10px 0px 0px 0px'}} >{title}</h4>    
            <p style={{marginBottom:'20px'}}>Rating: {rating}</p>
            <button style={{width:'120px'}} onClick={() => saveToFavorites(id)}>Add to Favorites</button>
        </div> 
        <div className="search-logo"><Logo/></div>

        </div>

      );
    }
  }
  
  export default SearchDetails;