const mongoose = require('mongoose');
const {Schema} = mongoose;

const movieSchema = new Schema({
    title: {type: String, required: true},
    year: Number,
    director: {type: String, required: true},
    plot: {type: String, required: true},
    genres: [{type: String, required: true}],
    poster: {type: String, required: true},
    imdb: {
        rating: Number,
        votes: Number
    }
}  , {versionKey: false} );

module.exports = mongoose.model('Movie', movieSchema,'movies2024');