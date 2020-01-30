const { tbl_users } = require('../models')
const getCatch = require('../utils/getCatch')
const generateRandomID = require('../utils/generateRandomID')
const generateDiscriminator = require('../utils/generateDiscriminator')

module.exports = {
    registerUser: async(req, res) => {
        const { username, email, password } = req.body
        const id_user = await generateRandomID(tbl_users)
        const person_number = await generateDiscriminator(username)
        const user = await tbl_users.create({id_user, username, email, password, person_number }).catch(err => getCatch(err))
        return res.json(user)
    },
    listUsers: async(req, res) => {
        const users = await tbl_users.findAll({raw: true}).catch(err => getCatch(err))
        return res.json(users)
    },
    getUser: async(req, res) => {
        const id = req.params.id
        const user = await tbl_users.findOne({where:{id_user : id}}).catch(err => getCatch(err))
        return res.json(user)
    },
    deleteUser: async(req, res) => {
        const id = req.params.id
        const response = await tbl_users.destroy({where: {id_user: id}}).catch(err => getCatch(err))
        return res.json(response)
    },
    updateUser: async(req, res) => {
        const id = req.params.id
        const response = await tbl_users.findOne({where: {id_user: id}}).then(async user =>{
            const response = await user.update(req.body).catch(err => getCatch(err))
            return response
        }).catch(err => getCatch(err))
        return res.json(response)
    }
}