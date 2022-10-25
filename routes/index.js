const express = require('express');
const router = express.Router();
const {listAllMovies} = require('../controllers/list_movies');
const {getMovieDetails} = require('../controllers/movie_details');

router.route('/api/v2/list_movies.json').get(listAllMovies);
router.route('/api/v2/movie_details.json').get(getMovieDetails);

module.exports = router;
