const tbl_users = require('../models/tbl_users')

module.exports = {
    registerUser: async(req, res) => {
        const { username, email, password } = req.body
        const user = await tbl_users.create({ username, email, password })
        return res.json(user)
    }
}