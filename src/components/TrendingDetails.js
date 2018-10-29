import React, { Component } from 'react';


class SearchDetails extends Component {

    render() {
      let urlPath = "https://image.tmdb.org/t/p/w300_and_h450_bestv2"
      let {id,title,overview,poster,rating} = this.props
      // console.log(title)
      return (

        <div className="trending-movie">
         <img className="trending-image" src={urlPath+poster}/>
         {/* <div className="trending-content">
            <h4 style={{}} >{title}</h4>    
            <p style={{}}>Rating: {rating}</p>
            
        </div>  */}

        </div>

      );
    }
  }
  
  export default SearchDetails;