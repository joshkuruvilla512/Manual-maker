const db = require("../models");

//creating input in the DB

module.exports = {
    create: function (req, res) {
        db.Manual.create(req.body)
            .then(manualType => res.json(manualType))
            .catch(err => res.status(422).json(err));
    },
    find: function (req, res) {
        db.Manual.findAll({})
            .then(manualType => res.json(manualType))
            .catch(err => res.status(422), json(err));
    }
};