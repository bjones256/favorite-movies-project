import React, {Component} from 'react';
import axios from 'axios';
import FavoriteDetails from './FavoriteDetails'

class Favorites extends Component {
    constructor() {
        super();

        this.deleteFavorite = this.deleteFavorite.bind( this );
        this.updateRating = this.updateRating.bind(this)
    }

        // Remove from Favorites
    deleteFavorite(id) {
        console.log(id)
        axios.delete(`api/favorites/${id}`).then(
        res =>{
            this.setState({
            favoriteMovies : res.data
            });this.props.update(res.data)
        }
        
        );
    }
    updateRating(id,text) {
        axios.put(`api/favorites/${id}`,{vote_average: text}).then(

          res =>{
              console.log(res)
            this.setState({
            favoriteMovies : res.data
            });this.props.update(res.data)
          }
        );
        }


    render() {
        
        return(
        <div>
            {/* {console.log(this.props.favoriteMovies)} */}
            
            <div className="favorites-container">
                {this.props.favoriteMovies.map( favs => (
                    <FavoriteDetails key={favs.id}
                    title={favs.title}
                    id={favs.id}
                    description={favs.description}
                    adult={favs.adult}
                    backdrop_path={favs.backdrop_path}
                    belongs_to_collection={favs.belongs_to_collection}
                    budget={favs.budget}
                    homepage={favs.homepage}
                    id={favs.id}
                    imdb_id={favs.imdb_id}
                    original_language={favs.original_language}
                    original_title={favs.original_title}
                    overview={favs.overview}
                    popularity={favs.popularity}
                    poster_path={favs.poster_path}
                    release_date={favs.release_date}
                    revenue={favs.revenue}
                    runtime={favs.runtime}
                    status={favs.status}
                    tagline={favs.tagline}
                    title={favs.title}
                    video={favs.video}
                    vote_average={favs.vote_average}
                    vote_count={favs.vote_count}
                    deleteFavorite={this.deleteFavorite}
                    // ratingInput={this.state.ratingInput}
                    rateFavorite={this.rateFavorite}
                    updateRating={this.updateRating}
                    />
                 ))} 
            </div>
        </div>

        )
    }

}

export default Favorites;