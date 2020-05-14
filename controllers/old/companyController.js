const db = require("../models");

//creating input in the DB

module.exports = {
    create: function (req, res) {
        db.Company.create(req.body)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Company.findById(req.params.id)
            .then(dbCompany => res.json(dbCompany))
            .catch(err => res.status(422), json(err));
    }
};