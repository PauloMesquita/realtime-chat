const { factory } = require('factory-girl')
const tbl_users = require('../src/models/tbl_users')
const tbl_chats = require('../src/models/tbl_chats')

factory.define('tbl_users', tbl_users, {
    username: 'Paulo',
    email: 'paulo@mesquita.dev',
    password: '123123'
})

factory.define('tbl_chats', tbl_chats,{
    title :'Conversa'
})

module.exports = factory