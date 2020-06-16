const db = require("../models")
module.exports = {
    findById: function(req,res){
        db.Event.findAll({
            where: {
                id: req.params.id
            }
        }).then(dbEvents =>{
            return res.json(dbEvents)
        })
    },
    findAll: function(req,res){
        db.Event.findAll({

        }).then(dbEvents =>{
            return res.json(dbEvents)
        })
    },
    create: function(req, res){
        db.Event.create({
            name: req.body.name, 
            location: req.body.location,
            time: req.body.time,
            creator: req.body.creator
        }).then(dbCreate =>{
            return res.json(dbCreate)
        })
    },
    delete: function(req, res){
        db.Event.destroy({
            where: {
                id: req.params.id
            }
        }).then(dbDesotry =>{
            return res.json(dbDesotry)
        })
    },
    update: function(req, res){
        db.Event.update({
            name: req.body.name,
            location: req.body.location,
            time: req.body.time,
            creator: req.body.creator
        }, {
            where: {
                id: req.params.id
            }
        }).then(dbUpdate =>{
            return res.json(dbUpdate)
        })
    }
}
