const apiCalls = require('../utils/apiCalls')
const truncate = require('../utils/truncate')

describe("CRUD Message", () => {
    beforeEach(async () => {
        await truncate()
    })

    // Send Message
    it("should send message", async () => {
        const user = await apiCalls.registerUser('Paulo V', 'paulo@mesquita.dev', '11')
        const chat = await apiCalls.registerChat('Chat 1', [user.body.id_user])
        const message = await apiCalls.sendMenssage("Mensagem teste 1", user.body.id_user, chat.body.id_chat)
        expect(message.body.content).toBe("Mensagem teste 1")
    })

    // Get messages
    it("should get messages from a chat", async () => {
        const user1 = await apiCalls.registerUser('Zilmar', 'zilmar@hotmail.com', '123')
        const user2 = await apiCalls.registerUser('Zilmar G', 'zilmarin@hotmail.com', '123')
        const chat = await apiCalls.registerChat('Chat', [user1.body.id_user, user2.body.id_user])
        const message1 = await apiCalls.sendMenssage('Message test 1', user1.body.id_user, chat.body.id_chat)
        const message2 = await apiCalls.sendMenssage('Message test 2', user2.body.id_user, chat.body.id_chat)
        const list = await apiCalls.getMessages(chat.body.id_chat)
        delete list.body[0].updatedAt
        delete list.body[0].createdAt
        delete list.body[1].updatedAt
        delete list.body[1].createdAt
        delete message1.body.createdAt
        delete message1.body.updatedAt
        delete message2.body.createdAt
        delete message2.body.updatedAt
        expect(list.body).toStrictEqual([message1.body,message2.body])
    })

    // Delete message
    it("sould delete a message", async () => {
        const user = await apiCalls.registerUser('Zilmar', 'zilmar@hotmail.com', '123')
        const chat = await apiCalls.registerChat('Chat')
        const message = await apiCalls.sendMenssage('Message test', user.body.id_user, chat.body.id_chat)
        await apiCalls.deleteMessage(message.body.id_message);
        const list = await apiCalls.getMessages()
        expect(list.body).toStrictEqual([])
    })

})