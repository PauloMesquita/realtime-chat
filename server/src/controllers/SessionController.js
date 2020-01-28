const tbl_users = require('../models/tbl_users')

module.exports = {
    loginUser: async(req, res) => {
        const { email, password } = req.body
        const user = await tbl_users.findOne({where: {email}})
        const response = user.password === password ? 1 : 0
        return res.json(response)
    },
}