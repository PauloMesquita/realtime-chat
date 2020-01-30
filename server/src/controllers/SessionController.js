const { tbl_users } = require('../models')
const getCatch = require('../utils/getCatch')
const jwt = require('../utils/JWT')

module.exports = {
    loginUser: async(req, res) => {
        const { email, password } = req.body
        const user = await tbl_users.findOne({where: {email}}).catch(err => getCatch(err))
        if(user!== null && user.password === password){
            delete user.createdAt
            delete user.updatedAt
            const jwtResponse = jwt.sign(user)
            res.json(jwtResponse)
        }else{
            res.json('You should not be here')
        }
    },
}