const request = require('supertest')
const app = require('../../src/app')
const truncate = require('../utils/truncate')

describe("CRUD User", () => {
    beforeEach(async () => {
        await truncate()
    })

    it("should create user", async () => {
        const user = await request(app).post('/registerUser').send({
            username: 'Paulo',
            email: 'paulo@mesquita.dev',
            password: '123123'
        })

        expect(user.email).toBe("paulo@mesquita.dev")
    })

    it("should report out of info problem", async () => {
        const user = await request(app).post('/registerUser').send({
            username: 'Paulo',
            email: 'paulo@mesquita.dev'
        })

        console.log(user)

        expect(user).toBe("0")
    })

    it("should report email already exists", async () => {
        const user1 = await request(app).post('/registerUser').send({
            username: 'Paulo',
            email: 'paulo@mesquita.dev',
            password: '123123'
        })

        const user2 = await request(app).post('/registerUser').send({
            username: 'Paulovm',
            email: 'paulo@mesquita.dev',
            password: '123123'
        })

        console.log(user2)

        expect(user2).toBe("0")
    })
})