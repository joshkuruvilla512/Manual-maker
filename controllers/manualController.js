const db = require("../models");

//creating input in the DB

module.exports = {
    create: function (req, res) {
        db.Manual.create(req.body)
            .then(dbManual => res.json(dbManual))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Manual.findById(req.params.id)
            .then(dbManual => res.json(dbManual))
            .catch(err => res.status(422), json(err));
    }
};