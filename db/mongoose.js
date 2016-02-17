var mongoose    = require('mongoose').connect('mongodb://localhost/cademeucao');
var db          = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {});

module.exports = db;