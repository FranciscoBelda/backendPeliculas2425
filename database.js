const mongoose = require('mongoose');

const URI = 'URL DE MONGODB'

mongoose.connect(URI)
.then(db => console.log('DB Connected'))
.catch(err => console.error(err));

module.exports = mongoose;
