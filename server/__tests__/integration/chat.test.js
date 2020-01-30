const app = require('../../src/app')
const request = require('supertest')
const truncate = require('../utils/truncate')
const apiCalls = require('../utils/apiCalls')

describe('Chat function', () =>{
    beforeEach(async() =>{
        await truncate()
    })

    it('should create a chat',async () =>{
        const user = await apiCalls.registerUser('Divino', 'lucas@divino.dev', '123123')
        const chat = await apiCalls.registerChat('conversa', [user.body.id_user])
        expect(chat.body.title).toBe('conversa')
    })

    it('should list chats', async() =>{
        const user = await apiCalls.registerUser('Divino', 'lucas@divino.dev', '123123')
        const expectedList = await apiCalls.registerChat('conversa', [user.body.id_user])

        delete expectedList.body.createdAt
        delete expectedList.body.updatedAt

        const list = await request(app).get('/listChats')
        delete list.body[0].createdAt
        delete list.body[0].updatedAt
 
        expect(list.body).toStrictEqual([expectedList.body])
    })

    it('should insert users and list the inserted users', async () =>{

        const user = await apiCalls.registerUser('Divino', 'lucas@divino.dev', '123123')
        const chat = await apiCalls.registerChat('conversa', [user.body.id_user])

        const user2 = await apiCalls.registerUser('Paulo', 'paulo@divino.dev', '123123')

        await apiCalls.insertUsers([user2.body.id_user], chat.body.id_chat)
        
        const list = await apiCalls.listChatUsers(chat.body.id_chat)

        expect(list.body).toStrictEqual([user.body, user2.body])
    })

    it('should delete chat', async () =>{
        const user = await apiCalls.registerUser('Divino', 'lucas@divino.dev', '123123')
        const chat = await apiCalls.registerChat('conversa', [user.body.id_user])
        const preList = await apiCalls.listChats()
        const sdc = await apiCalls.deleteChat(chat.body.id_chat)

        const list = await apiCalls.listChats()

        expect(list.body).toStrictEqual([])
    })

    it('should delete chat users', async () =>{
        const user = await apiCalls.registerUser('Divino', 'lucas@divino.dev', '123123')
        const chat = await apiCalls.registerChat('conversa', [user.body.id_user])

        const user2 = await apiCalls.registerUser('Paulo', 'paulo@divino.dev', '123123')
        
        await apiCalls.insertUsers([user2.body.id_user], chat.body.id_chat)
        
        await apiCalls.deleteChatUsers([user2.body.id_user], chat.body.id_chat)
        
        const list = await apiCalls.listChatUsers(chat.body.id_chat)

        expect(list.body).toStrictEqual([user.body])
    })

    it('should delete the chat if there are no users', async() =>{
        const user = await apiCalls.registerUser('Divino', 'lucas@divino.dev', '123123')
        const chat = await apiCalls.registerChat('conversa', [user.body.id_user])

        await apiCalls.deleteChatUsers([user.body.id_user], chat.body.id_chat)

        const list = await apiCalls.listChats()

        expect(list.body).toStrictEqual([])       
    })
})