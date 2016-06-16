const movieCtrl = require( './movieCtrl' );

// module.exports = function( app ) {
//
// };

module.exports = app => {
	app.get( `/api/movies`, movieCtrl.getMovies );
	app.get( `/api/movies/rating`, movieCtrl.getMoviesByRating );
	app.get( `/api/movies/:id/`, movieCtrl.getMovie );
	app.delete( `/api/movies/:id`, movieCtrl.deleteMovie );
	app.post( `/api/movies`, movieCtrl.checkStars, movieCtrl.createTimestamps, movieCtrl.createMovie );
};