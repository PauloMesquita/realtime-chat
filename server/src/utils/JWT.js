const jwt = require('jsonwebtoken')

module.exports = {
    sign: (object) => {
        return jwt.sign({object}, process.env.JWT_PASS, { expiresIn: '1h' })
    },
    verify: (token) => {
        return jwt.verify(token, process.env.JWT_PASS)
    }
}