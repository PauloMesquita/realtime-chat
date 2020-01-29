const tbl_chats = require('../models/tbl_chats')
const tbl_chat_user = require('../models/tbl_chat_user')
const tbl_users = require('../models/tbl_users')
const getCatch = require('../utils/getCatch')

module.exports = {
    registerChat: async(req, res) => {
        const { title } = req.body
        const chat = await tbl_chats.create({title})
        .catch(err => getCatch(err))
        return res.json(chat)
    },
    listChats: async(req, res) => {
        const chats = await tbl_chats.findAll({raw: true})
        .catch(err => getCatch(err))
        return res.json(chats)
    },
    insertUsers: async(req, res) => {
        const {id_users, id_chat} = req.body
        const response = {}
        response.insertion = []
        for(id_user in id_users){
            response.insertion[id_user] = await tbl_chat_user.create({
                fk_id_user: id_users[id_user],
                fk_id_chat: id_chat
            }).catch(err => getCatch(err))
        }
        return res.json(response.insertion)
    },
    listChatUsers: async(req, res) => {
        const id = req.params.id
        const chat_users = await tbl_chat_user.findAll({where:{fk_id_chat : id}, raw: true})
        .catch(err => getCatch(err))
        if(chat_users === 0) return res.json(chat_users)
        const users = []
        for(chat_user of chat_users){
            const user = await tbl_users.findOne({where: {id_user: chat_user.fk_id_user}})
            .catch(err => getCatch(err))
            if (user !== 0) users.push(user) 
        }
        return res.json(users)
    },
    deleteChat: async(req, res) => {
        const id = req.params.id
        const response = await tbl_chats.destroy({where:{id_chat : id}})
        .catch(err => getCatch(err))
        return res.json(response)
    },
    deleteChatUsers: async(req, res) => {
        const {id_users, id_chat} = req.body
        const response = {}
        response.remove = []
        for (id_user in id_users) {
            response.remove[id_user] = await tbl_chat_user.destroy({where:{
                fk_id_user : id_users[id_user],
                fk_id_chat : id_chat
            }})
            .catch(err => getCatch(err))
        }
        return res.json(response.remove)
    }
}