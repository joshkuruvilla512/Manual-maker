const db = require("../models");

//creating input in the DB

module.exports = {
    create: function (req, res) {
        db.Info.create(req.body)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Info.findById(req.params.id)
            .then(dbInfo => res.json(dbInfo))
            .catch(err => res.status(422), json(err));
    }
};