const movieRoutes = require( './movies/movieRoutes' );

// module.exports = function( app ) {
//
// };

module.exports = app => {
	movieRoutes( app );
};