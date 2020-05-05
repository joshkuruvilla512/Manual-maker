const db = require("../models");

// Defining methods for the InfoController
module.exports = {
  findAll: function(req, res) {
    db.Info.find(req.query)
      .then(dbInfo => res.json(dbInfo))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Info.findById(req.params.id)
      .then(dbInfo => res.json(dbInfo))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Info.create(req.body)
      .then(dbInfo => res.json(dbInfo))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Info.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbInfo => res.json(dbInfo))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Info.findById(req.params.id)
      .then(dbInfo => dbInfo.remove())
      .then(dbInfo => res.json(dbInfo))
      .catch(err => res.status(422).json(err));
  }
};