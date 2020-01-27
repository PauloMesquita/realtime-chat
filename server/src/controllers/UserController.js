const tbl_users = require('../models/tbl_users')

module.exports = {
    registerUser: async(req, res) => {
        const { username, email, password } = req.body
        const user = await tbl_users.create({ username, email, password }).catch(() => 0)
        return res.json(user)
    },
    listUsers: async(req, res) => {
        const users = await tbl_users.findAll({raw: true}).catch(() => 0)
        return res.json(users)
    },
    getUser: async(req, res) => {
        const id = req.params.id
        const user = await tbl_users.findOne({where:{id_user : id}}).catch(() => 0)
        return res.json(user)
    },
    deleteUser: async(req, res) => {
        const id = req.params.id
        const response = await tbl_users.destroy({where: {id_user: id}}).catch(() => 0)
        return res.json(response)
    },
    updateUser: async(req, res) => {
        const id = req.params.id
        const response = await tbl_users.findOne({where: {id_user: id}}).then(async user =>{
            const response = await user.update(req.body).catch(() => 0)
            return response
        }).catch(() => 0)
        return res.json(response)
    }
}