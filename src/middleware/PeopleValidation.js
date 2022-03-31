const PeopleModel = require('../model/PeopleModel')

const PeopleValidation = async (req, res, next) => {
    const {nome, idade, estado_civil, cpf, cidade, estado} = req.body

    if(!nome){
        return res.status(400).json({ error: 'O preenchimento do nome é obrigatório!'});
    } else if(!idade){
        return res.status(400).json({ error: 'O preenchimento do idade é obrigatório!'});
        } else if(!estado_civil){
            return res.status(400).json({ error: 'O preenchimento do estado civil é obrigatório!'});
            } else if(!cpf){
                return res.status(400).json({ error: 'O preenchimento do cpf é obrigatório!'});
                } else if(!cidade){
                    return res.status(400).json({ error: 'O preenchimento da cidade é obrigatório!'});
                    } else if(!estado){
                        return res.status(400).json({ error: 'O preenchimento do estado é obrigatório!'});
                        } else {
                                next()
                            }
}

module.exports = PeopleValidation