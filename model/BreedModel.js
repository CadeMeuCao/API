var db = require('../db/mongoose');

var Breed = db.model('Breed', {
    name: { type: String }
});

function BreedModel() {

}

BreedModel.prototype.create = function(data, callback) {
    new Breed(data).save(callback);
};

module.exports = new BreedModel();