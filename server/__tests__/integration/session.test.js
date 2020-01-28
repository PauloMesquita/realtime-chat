const tbl_users = require('../../src/models/tbl_users')
const request = require('supertest')
const app = require('../../src/app')

describe("CRUD user", () => {
    it("should return user", async () => {
        const user = await tbl_users.create({
            username: "Zilzil",
            email: "zilzil@zilzil.com",
            password: "zilzilzilzilzilzilzil"
        })

        expect(user.email).toBe("zilzil@zilzil.com")
    })
})