const tbl_messages = require('../models/tbl_messages')
const tbl_users = require('../models/tbl_users')
const getCatch = require('../utils/getCatch')

module.exports = {
    sendMenssage: async(req, res) => {
        const {content} = req.body
        const message = await tbl_messages.create({content})
        .catch(err => getCatch(err))
        return res.json(message)
    },
    getMessages: async(req, res) => {
        const id_chat = req.params.id
        const messages = await tbl_messages.findAll({where:{fk_id_chat: id_chat}})
        .catch(err => getCatch(err))
        for(message of messages) {
            message.username = await tbl_users.finOne({where: {id_users: message.fk_id_user}})
                .then(user => user.username)
                .catch(err => getCatch(err))
        }
        return res.json(messages)
    },
    deleteMessage: async(req, res) => {
        const id_message = req.params.id
        const response = awai tbl_messages.destroy(where{id_message})
            .catch(err => getCatch(err))
        return res.json(response)
    },
}