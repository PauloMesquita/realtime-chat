
const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const tbl_users = require('../models/tbl_users')
const tbl_chats = require('../models/tbl_chats')
const tbl_chat_user = require('../models/tbl_chat_user')
const tbl_messages = require('../models/tbl_messages')

const connection = new Sequelize(dbConfig)

tbl_users.init(connection)
tbl_chats.init(connection)
tbl_chat_user.init(connection)
tbl_messages.init(connection)

module.exports = connection