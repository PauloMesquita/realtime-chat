const models = []
models.push(require('../../src/models/tbl_chat_user'))
models.push(require('../../src/models/tbl_messages'))
models.push(require('../../src/models/tbl_users'))
models.push(require('../../src/models/tbl_chats'))

module.exports = () => {
    return Promise.all(models.map(model => {
        return model.destroy({truncate: {cascade:true}, restartIdentity: true})
    }))
}