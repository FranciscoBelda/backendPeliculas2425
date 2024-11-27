const Movie = require('../models/movie.model');
const movieCtrl = {};

// Función que devolverá todas las películas
movieCtrl.getMovies = async (req, res) => {
    const movies = await Movie.find()
        .then((data) => res.status(200).json(data))
        .catch((err) => console.error(err));
};

// Función que devuelve una película dada una ID
movieCtrl.getMovie = async (req, res) => {
    const movie = await Movie.findById(req.params.id)
        .then((data) => {
            if(data!=null) res.status(200).json(data)
            else res.status(404).json({status: 'Movie not found'})
        })
        .catch((err) => console.error(err));
}

// Añadir una nueva película a nuestra base de datos
movieCtrl.addMovie = async (req, res) => {
    const movie = new Movie(req.body);
    await movie.save()
        .then(() => {
            res.status(201).json({status: 'Movie successfully inserted!'})
        })
        .catch(err => {
            res.send(err.message);
            console.error(err);
        })
}

// Actualizar una película dado un id y los nuevos datos de la película
movieCtrl.updateMovie = async (req, res) => {
    const movie = req.body;
    await Movie.findByIdAndUpdate(
        req.params.id,
        {$set: movie},
        {new: true})
        .then((data) =>  {
            if (data!=null) res.status(200).json({status: 'Movie successfully updated!', data})
            else res.status(404).json({status: 'Movie not found.'})
        })
        .catch(err => res.status(400).send(err.message))
}

// Función para borrar una película dada una ID
movieCtrl.deleteMovie = async (req, res) =>  {
    await Movie.findByIdAndDelete(req.params.id)
        .then((data) =>  {
            if (data!= null) res.status(200).json({status: 'Movie successfully deleted!'})
            else res.status(404).json({status: 'Movie not found'})
        })
        .catch(err => res.status(400).send(err.message))
}

// Función para obtener los diferentes géneros de la DB
movieCtrl.getGenres = async (req, res) => {
    await Movie.find().distinct('genres')
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(400).send(err.message))
}

module.exports = movieCtrl;
