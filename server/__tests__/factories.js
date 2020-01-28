const { factory } = require('factory-girl')
const tbl_users = require('../src/models/tbl_users')

factory.define('tbl_users', tbl_users, {
    username: 'Paulo',
    email: 'paulo@mesquita.dev',
    password: '123123'
})

module.exports = factory