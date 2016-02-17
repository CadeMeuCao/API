var BreedModel = require('../model/BreedModel');

function BreedController(Model) {
    this.Model = Model;
}

BreedController.prototype.create = function(req, res) {
    var data = req.body;

    this.Model.create(data, function(err, breed){
        res.json(breed);
    });
};

BreedController.prototype.findAll = function(req, res) {
    /*
    this.Model.findAll(function(err, result){
        res.json(result);
    });
    */
};

module.exports = new BreedController(BreedModel);