const PeopleModel = require('../model/PeopleModel')

class PeopleController {
    async create(req, res){
        const people = new PeopleModel(req.body)
        await people
            .save()
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(500).json(error)
            })
    }

    async all(req, res){
        await PeopleModel.find({})
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(500).json(error)
            })
    }
}

module.exports = new PeopleController()