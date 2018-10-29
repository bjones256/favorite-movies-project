let favorites = [
    {
        "adult": false,
        "backdrop_path": "/rnA8SQJbfurzCPYx3k5I2NFcbYi.jpg",
        "belongs_to_collection": null,
        "budget": 10000000,
        "genres": [
          {
            "id": 28,
            "name": "Action"
          },
          {
            "id": 12,
            "name": "Adventure"
          },
          {
            "id": 35,
            "name": "Comedy"
          }
        ],
        "homepage": "http://iamrogue.com/macgruber/",
        "id": 0,
        "imdb_id": "tt1470023",
        "original_language": "en",
        "original_title": "MacGruber",
        "overview": "Ex-special operative MacGruber (Forte) is called back into action to take down his archenemy, Dieter Von Cunth (Kilmer), who's in possession of a nuclear warhead and bent on destroying Washington, DC.",
        "popularity": 8.063,
        "poster_path": "/4X8eGHtYPnLUQF9l3cb0Aj6IDaU.jpg",
        "production_companies": [
          {
            "id": 7295,
            "logo_path": "/5MYE96QiE5a5oFhXxFb4y8ILSpw.png",
            "name": "Relativity Media",
            "origin_country": "US"
          }
        ],
        "production_countries": [
          {
            "iso_3166_1": "US",
            "name": "United States of America"
          }
        ],
        "release_date": "2010-05-21",
        "revenue": 6110000,
        "runtime": 90,
        "spoken_languages": [
          {
            "iso_639_1": "en",
            "name": "English"
          },
          {
            "iso_639_1": "ru",
            "name": "Pусский"
          }
        ],
        "status": "Released",
        "tagline": "He's the ultimate tool.",
        "title": "MacGruber",
        "video": false,
        "vote_average": 5.3,
        "vote_count": 233
      },
];

let id = 1;

module.exports = {
    read: (req,res) => {
        res.status(200).send( favorites );
        console.log(favorites)
    },
    create: (req,res) => {
        const { adult,backdrop_path,belongs_to_collection,budget,homepage,imdb_id,original_language,original_title,overview,popularity,poster_path,release_date,revenue,runtime,status,tagline,title,video,vote_average,vote_count } = req.body;
        let fav = {
            adult:adult,
            backdrop_path:backdrop_path,
            belongs_to_collection:belongs_to_collection,
            budget:budget,
            homepage:homepage,
            id:id,
            imdb_id:imdb_id,
            original_language:original_language,
            original_title:original_title,
            overview:overview,
            popularity:popularity,
            poster_path:poster_path,
            release_date:release_date,
            revenue:revenue,
            runtime:runtime,
            status:status,
            tagline:tagline,
            title:title,
            video:video,
            vote_average:vote_average,
            vote_count:vote_count
        }
        favorites.push( fav );
        id++;
        res.status(200).send( favorites );
    },
    delete: (req,res) => {
        let index = null;
        favorites.forEach((favorite,i) =>{
            if(favorite.id === Number(req.params.id)) index = i;
        })
        favorites.splice(index,1);
        res.status(200).send( favorites );
    },
    update: ( req, res ) => {
      let index = null;
      favorites.forEach((fav, i) => {
        if(fav.id === Number(req.params.id)) index = i;
      })
      console.log(1111, req.body)
      favorites[ index ] = {
        adult:favorites[ index ].adult,
        backdrop_path:favorites[ index ].backdrop_path,
        belongs_to_collection:favorites[ index ].belongs_to_collection,
        budget:favorites[ index ].budget,
        homepage:favorites[ index ].homepage,
        id:favorites[ index ].id,
        imdb_id:favorites[ index ].imdb_id,
        original_language:favorites[ index ].original_language,
        original_title:favorites[ index ].original_title,
        overview:favorites[ index ].overview,
        popularity:favorites[ index ].popularity,
        poster_path:favorites[ index ].poster_path,
        release_date:favorites[ index ].release_date,
        revenue:favorites[ index ].revenue,
        runtime:favorites[ index ].runtime,
        status:favorites[ index ].status,
        tagline:favorites[ index ].tagline,
        title:favorites[ index ].title,
        video:favorites[ index ].video,
        vote_average:req.body.vote_average,
        vote_count:favorites[ index ].vote_count
      };
      res.status(200).send( favorites );
    },

}; 