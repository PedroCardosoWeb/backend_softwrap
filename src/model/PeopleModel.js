const mongoose = require('../config/database')
const Schema = mongoose.Schema

const PeopleSchema = new Schema({
    nome: {type: String, required: true},
    idade: {type: Number, required: true},
    estado_civil: {type: String, required: true},
    cpf: {type: Number, required: true},
    cidade: {type: String, required: true},
    estado: {type: String, required: true}
})

module.exports = mongoose.model('People', PeopleSchema)