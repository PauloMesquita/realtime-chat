const tbl_users = require('../models/tbl_users')
const getCatch = require('../utils/getCatch')

module.exports = {
    registerUser: async(req, res) => {
        const { username, email, password } = req.body
        const user = await tbl_users.create({ username, email, password }).catch(err => getCatch(err))
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