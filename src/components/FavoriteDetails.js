import React, {Component} from 'react';
import Logo from './Logo';

class FavoriteDetails extends Component {
  constructor(){
    super()
    this.state={
      rating : 0,
    }
    this.userInput = this.userInput.bind(this)
  }
userInput(val){
console.log(typeof val)
this.setState({
  rating : parseInt(val)
})
console.log(typeof this.state.rating)
}

    render() {
      let 
      
      {adult,
      backdrop_path,
      belongs_to_collection,
      budget,
      homepage,
      id,
      imdb_id,
      original_language,
      original_title,
      overview,
      popularity,
      poster_path,
      release_date,
      revenue,
      runtime,
      status,
      tagline,
      title,
      video,
      vote_average,
      vote_count,
      deleteFavorite,
      ratingInput,
      rateFavorite,
      rating,
      updateRating
    }
      = this.props
      // build start rating

      let urlPath = "https://image.tmdb.org/t/p/w300_and_h450_bestv2"
      let backDropUrl ='https://image.tmdb.org/t/p/w1400_and_h450_face/'
      let color = 'red';
if(vote_average>=5 && vote_average<=7){
  color='yellow'
}
else if(vote_average>7){
  color='green'
}
      return (

         <div>
          <div className="favorite-container">
            <img className="back-drop absolute"  src= {backDropUrl + backdrop_path}/>
            <img className=" absolute movie-poster"src={urlPath + poster_path}/>

            <div className="movie-info">
              <h4 className="movie-title">{title}</h4>  
              <div style={{postion:'relative',width:'100px',height:'15px', backgroundColor:'#fff',borderRadius:'3px', float:'left'}}>
              <div style={{postion:'absolute',height:'15px',backgroundColor:color ,width:`${vote_average*10}px`,borderRadius:'3px'}}>
              </div>
              </div>

              <span style={{float:'left', marginRight:'5px', marginLeft:'5px'}}>   {vote_average} </span>
              <p>/ {vote_count} votes</p> 
{/* change rating */}
              <div style={{position: 'relative',border: '0px',borderRadius:'6px',height:'50px',    marginTop: '10px'}}>
                <input placeholder="Rate"style={{width:'50px',height:'40px',fontSize:'22px',position:'absolute',border: '0px',borderRadius:'6px'}}onChange={ ( e ) => this.userInput( e.target.value ) }/>
                <button style={{backgroundColor:'teal',position:'absolute',border: '0px',borderRadius:'6px',left:'65px'}}onClick={() => {updateRating(id,this.state.rating) }}>Rate Movie</button>
              </div>

              <p className="tagline">{tagline}</p>  
              <p className="overview">{overview}</p>
              <p className="runtime">Runtime: {runtime} minutes</p>
              <p className="release-date">Released: {release_date}</p>
              <button onClick={() => {deleteFavorite(id) }}>Remove from Favorites</button>


            </div>
            <div className="favorites-logo"><Logo/></div>
          </div>

        </div>

      );
    }
  }
  
  export default FavoriteDetails;