const { tbl_chats, tbl_users, tbl_chat_user } = require('../models')
const getCatch = require('../utils/getCatch')
const generateRandomID = require('../utils/generateRandomID')

module.exports = {
    registerChat: async(req, res) => {
        const { title, id_users } = req.body
        if(id_users === [] || id_users === null || id_users === undefined) return res.json('Nao foram enviados usuarios para cadastrar')
        const id_chat = await generateRandomID(tbl_chats)
        const chat = await tbl_chats.create({id_chat, title}).catch(err => getCatch(err))
        for(id_user of id_users){
            const responseChatUser = await tbl_chat_user.create({fk_id_user: id_user, fk_id_chat: id_chat}).catch(async err => {
                await tbl_chats.destroy({where: {id_chat}})
                return "0"
            })
            if(responseChatUser.toString().charAt(0) == '0') return res.json('Erro ao cadastrar usuario no chat')
        }
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
        .catch(async err => getCatch(err))
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
        const chat_users = await tbl_chat_user.count({where:{fk_id_chat : id_chat}})
        if(chat_users === 0){
            await tbl_chats.destroy({where: {id_chat : id_chat}}).catch(err => getCatch(err))
        }
        return res.json(response.remove)
    }
}