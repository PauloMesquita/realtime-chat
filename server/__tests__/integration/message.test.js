const apiCalls = require('../utils/apiCalls')
const truncate = require('../utils/truncate')

describe("CRUD Message", () => {
    beforeEach(async () => {
        await truncate()
    })

    // Send Message
    it("should send message", async () => {
        const user = await apiCalls.registerUser('Paulo V', 'paulo@mesquita.dev', '11')
        const chat = await apiCalls.registerChat('Chat 1')
        const message = await apiCalls.sendMenssage("Mensagem teste 1", user.body.id_user, chat.body.id_chat)
        expect(message.body.content).toBe("Mensagem teste 1")
    })

})