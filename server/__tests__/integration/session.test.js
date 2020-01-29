const apiCalls = require('../utils/apiCalls')
const truncate = require('../utils/truncate')

describe("Authentication", () => {
    beforeEach(async () => {
        await truncate()
    })

    it("should return 1 if data is correct", async () => {
        await apiCalls.registerUser('Paulo', 'paulo@mesquita.dev', '123123')
        const response = await apiCalls.loginUser('paulo@mesquita.dev', '123123')
        expect(response.text).toBe("1")
    })

    it("should return 0 if data is incorrect", async () => {
        await apiCalls.registerUser('Paulo', 'paulo@mesquita.dev', '123123')
        const response = await apiCalls.loginUser('paulo@mesquita.dev', '123123')
        expect(response.text).toBe("0")
    })
})