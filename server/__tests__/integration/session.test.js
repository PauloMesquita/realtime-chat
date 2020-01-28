const factory = require('../factories')
const request = require('supertest')
const app = require('../../src/app')
const truncate = require('../utils/truncate')

describe("Authentication", () => {
    beforeEach(async () => {
        await truncate()
    })

    it("should return 1 if data is correct", async () => {
        const user = await factory.create('tbl_users')

        const response = await request(app).post('/loginUser').send({
            email: "paulo@mesquita.dev",
            password: "123123"
        })

        expect(response.text).toBe("1")
    })

    it("should return 0 if data is incorrect", async () => {
        const user = await factory.create('tbl_users')

        const response = await request(app).post('/loginUser').send({
            email: "paulo@mesquita.dev",
            password: "123456"
        })

        expect(response.text).toBe("0")
    })
})