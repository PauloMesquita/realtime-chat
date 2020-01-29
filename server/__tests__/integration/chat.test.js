const app = require('../../src/app')
const request = require('supertest')
const truncate = require('../utils/truncate')
const api = require('../utils/apiCalls')

describe('Chat function', () =>{
    beforeEach(async() =>{
        await truncate()
    })

    it('should create a chat',async () =>{
        const chat = await api.registerChat('conversa')
        expect(chat.body.title).toBe('conversa')
    })

    it('should list chats', async() =>{
        const expectedList = await api.registerChat('conversa')
        delete expectedList.body.createdAt
        delete expectedList.body.updatedAt

        const list = await request(app).get('/listChats')
        delete list.body[0].createdAt
        delete list.body[0].updatedAt
 
        expect(list.body).toStrictEqual([expectedList.body])
    })

    it('should insert users and list the inserted users', async () =>{

        const chat = await api.registerChat('conversa')

        const insert = await api.insertUsers([1,2], chat.body.id_chat)

    })

})