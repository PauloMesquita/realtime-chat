const { tbl_users } = require('../models')
const getCatch = require('../utils/getCatch')

module.exports = {
    loginUser: async(req, res) => {
        const { email, password } = req.body
        const user = await tbl_users.findOne({where: {email}}).catch(err => getCatch(err))
        const response = (user!== null && user.password === password) ? 1 : 0
        return res.json(response)
    },
}