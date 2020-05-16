const db = require("../models");

//creating input in the DB

module.exports = {
    create: function (req, res) {
        db.Section.create(req.body)
            .then(dbSection => res.json(dbSection))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Section.findById(req.params.id)
            .then(dbSection => res.json(dbSection))
            .catch(err => res.status(422), json(err));
    }
};