const { tbl_messages, tbl_users } = require('../models')
const getCatch = require('../utils/getCatch')
const generateRandomID = require('../utils/generateRandomID')

module.exports = {
    sendMenssage: async(req, res) => {
        const {content, fk_id_user, fk_id_chat} = req.body
        const id_message = await generateRandomID(tbl_messages)
        const message = await tbl_messages.create({id_message, content, fk_id_chat, fk_id_user})
        .catch(err => getCatch(err))
        return res.json(message)
    },
    getMessages: async(req, res) => {
        const id_chat = req.params.id
        const messages = await tbl_messages.findAll({where:{fk_id_chat: id_chat}, raw:true})
        .catch(err => getCatch(err))
        for(message of messages) {
            message.username = await tbl_users.findOne({where: {id_users: message.fk_id_user}})
                .then(user => user.username)
                .catch(err => getCatch(err))
        }
        return res.json(messages)
    },
    deleteMessage: async(req, res) => {
        const id_message = req.params.id
        const response = await tbl_messages.destroy({where:{id_message}})
            .catch(err => getCatch(err))
        return res.json(response)
    },
}