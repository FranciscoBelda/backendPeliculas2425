const express = require('express');
const router = express.Router();
const movieCtrl = require('../controllers/movie.controller');

router.get('/', movieCtrl.getMovies);
router.get('/movie/:id', movieCtrl.getMovie);
router.post('/', movieCtrl.addMovie);
router.put('/:id', movieCtrl.updateMovie);
router.delete('/:id', movieCtrl.deleteMovie);

router.get('/getGenres',movieCtrl.getGenres);

module.exports = router;
