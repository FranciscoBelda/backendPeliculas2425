const mongoose = require('mongoose');

const URI = 'mongodb+srv://superuser:superuser@miclustersolvam.8x0gl.mongodb.net/solvam2425?retryWrites=true&w=majority&appName=MiClusterSolvam'

mongoose.connect(URI)
.then(db => console.log('DB Connected'))
.catch(err => console.error(err));

module.exports = mongoose;
