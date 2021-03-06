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

    async update(req, res){
        await PeopleModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true})
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(500).json(error)
            })
    }

    async delete(req, res){
        await PeopleModel.deleteOne({'_id': req.params.id})
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(200).json(response)
            })
    }
}

module.exports = new PeopleController()