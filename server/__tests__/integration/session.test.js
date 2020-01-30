const apiCalls = require('../utils/apiCalls')
const truncate = require('../utils/truncate')
const jwt = require('../../src/utils/JWT')

describe("Authentication", () => {
    beforeEach(async () => {
        await truncate()
    })

    it("should return 1 if data is correct", async () => {
        const user = await apiCalls.registerUser('Paulo', 'paulo@mesquita.dev', '123123')
        delete user.body.updatedAt
        delete user.body.createdAt
        const token = await apiCalls.loginUser('paulo@mesquita.dev', '123123')
        const userData = jwt.verify(token.body)
        delete userData.object.updatedAt
        delete userData.object.createdAt
        expect(userData.object).toStrictEqual(user.body)
    })

    it("should return 0 if data is incorrect", async () => {
        await apiCalls.registerUser('Paulo', 'paulo@mesquita.dev', '123123')
        const response = await apiCalls.loginUser('paulo@mesquita.devs', '123456')
        expect(response.body).toBe('You should not be here')
    })

})