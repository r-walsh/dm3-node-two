const movies = [
	{
		title: `Forest Gump`,
		stars: 5,
		id: 1
	},
	{
		title: `Die Hard`,
		stars: 5,
		id: 2
	},
	{
		title: "Kimodo vs Cobra",
		stars: 2,
		id: 3
	}
];

module.exports = {
	getMovies( req, res, next ) {
		res.status( 200 ).json( movies );
	},
	// getMovies: function() {

	getMovie( req, res, next ) {
		for ( let i = 0; i< movies.length; i++ ) {
			if ( movies[ i ].id === parseInt( req.params.id ) ) {
				return res.status( 200 ).json( movies[ i ] );
			}
		}

		return res.status( 404 ).json( `Movie not found` );
	},

	getMoviesByRating( req, res, next ) {
		const moviesToSend = [];

		for ( let i = 0; i< movies.length; i++ ) {
			if ( movies[ i ].stars >= parseInt( req.query.stars ) ) {
				moviesToSend.push( movies[ i ] );
			}
		}

		return res.status( 200 ).json( moviesToSend );
	},

	deleteMovie( req, res, next ) {
		for ( let i = 0; i< movies.length; i++ ) {
			if ( movies[ i ].id === parseInt( req.params.id ) ) {
				movies.splice( i, 1 );
				return res.status( 200 ).json( movies );
			}
		}
		return res.status( 404 ).json( `Movie not found` );
	},

	createMovie( req, res, next ) {
		movies.push( req.body );
		res.status( 201 ).json( movies );
	},

	checkStars( req, res, next ) {
		if ( req.body.stars < 0 ) {
			return res.status( 418 ).json( `Must have at least 0 stars` );
		}

		next();
	},

	createTimestamps( req, res, next ) {
		req.body.createdAt = new Date();
		next();
	},

	checkUser( req, res, next ) {
		if ( !req.body.user ) {
			return res.status( 401 ).json( `LOG IN!` );
		}
		next();
	}
};