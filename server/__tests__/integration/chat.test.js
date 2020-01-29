const app = require('../../src/app')
const request = require('supertest')
const truncate = require('../utils/truncate')
const factory = require('../factories')

describe('Chat function', () =>{
    beforeEach(async() =>{
        await truncate()
    })

    it('should create chat',async () =>{
        const chat = await request(app).post('/registerChat').send({
            title: 'conversa'
        })
        expect(chat.body.title).toBe('conversa')
    })
    it('should list chats', async() =>{
        
    })
})