const request = require('supertest')
const app = require('../../src/app')

module.exports = {
    //###User Controller###
    registerUser: async(username, email, password) => {
        return await request(app).post('/registerUser').send({username, email, password}).then(response => response).catch(err => err)
    },
    listUsers: async() => {
        return await request(app).get('/listUsers').then(response => response).catch(err => err)
    },
    getUser: async(id) => {
        return await request(app).get(`/getUser/${id}`).then(response => response).catch(err => err)
    },
    deleteUser: async(id) => {
        return await request(app).delete(`/deleteUser/${id}`).then(response => response).catch(err => err)
    },
    updateUser: async(id, info) => {
        return await request(app).put(`/updateUser/${id}`).send(info).then(response => response).catch(err => err)
    },

    //###Session Controller###
    loginUser: async(email, password) => {
        return await request(app).post('/loginUser').send({email, password}).then(response => response).catch(err => err)
    },

    //###Chat Controller###
    registerChat: async(title, id_users) =>{
        return await request(app).post('/registerChat').send({title, id_users}).then(response => response).catch(err => err)
    },
    listChats : async() =>{
        return await request(app).get('/listChats').then(response => response).catch(err => err)
    },
    insertUsers: async(id_users, id_chat) =>{
        return await request(app).post('/insertUsers').send({id_users, id_chat}).then(response => response).catch(err => err)
    },
    listChatUsers: async(id) =>{
        return await request(app).get(`/listChatUsers/${id}`).then(response => response).catch(err => err)
    },
    deleteChat: async(id) =>{
        return await request(app).delete(`/deleteChat/${id}`).then(response => response).catch(err => err)
    },
    deleteChatUsers: async(id_users, id_chat) =>{
        return await request(app).delete(`/deleteChatUsers`).send({id_users, id_chat}).then(response => response).catch(err => err)
    },

    //Message Controller
    sendMenssage: async(content, fk_id_user, fk_id_chat) => {
        return await request(app).post('/sendMenssage').send({content, fk_id_chat, fk_id_user}).then(response => response).catch(err => err)
    },
    getMessages: async(id) => {
        return await request(app).get(`/getMessages/${id}`)
            .then(response => response)
            .catch(err => err)
    },
    deleteMessage: async(id) => {
        return await request(app).delete(`/deleteMessage/${id}`)
            .then(response => response)
            .catch(err => err)
    }
}