const models = []
models.push(require('../../src/models/tbl_users'))
models.push(require('../../src/models/tbl_chats'))
models.push(require('../../src/models/tbl_messages'))
models.push(require('../../src/models/tbl_chat_user'))

/*
const tbl_users = require('../../src/models/tbl_users')
const tbl_chats = require('../../src/models/tbl_chats')
const tbl_messages = require('../../src/models/tbl_messages')
const tbl_chat_user = require('../../src/models/tbl_chat_user')
*/

module.exports = () => {
    return Promise.all(models.map(model => {
        return model.destroy({truncate:true, force: true})
    }))
}