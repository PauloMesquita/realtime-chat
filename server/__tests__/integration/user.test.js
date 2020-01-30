const apiCalls = require('../utils/apiCalls')
const truncate = require('../utils/truncate')

describe("CRUD User", () => {
    beforeEach(async () => {
        await truncate()
    })

    //### REGISTER USER ###
    it("should create user", async () => {
        const user = await apiCalls.registerUser('Paulo', 'paulo@mesquita.dev', '123123')
        expect(user.body.email).toBe("paulo@mesquita.dev")
    })

    it("should report out of password problem", async () => {
        const user = await apiCalls.registerUser('Paulo', 'paulo@mesquita.dev')
        expect(user.body).toBe("tbl_users.password cannot be null")
    })

    it("should report email already exists", async () => {
        await apiCalls.registerUser('Paulo', 'paulo@mesquita.dev', '123123')
        const user2 = await apiCalls.registerUser('PauloV', 'paulo@mesquita.dev', '123123')
        expect(user2.body).toBe("email must be unique")
    })


    //### LIST USERS ###
    it("should list users registered in the db", async() => {
        const user1 = await apiCalls.registerUser('Paulo', 'paulo@mesquita.dev', '123123')
        const user2 = await apiCalls.registerUser('Paulo V', 'paulo@mesquita.devs', '123123')
        const list = await apiCalls.listUsers()
        user1.body.updatedAt = list.body[0].updatedAt
        user2.body.updatedAt = list.body[1].updatedAt
        user1.body.createdAt = list.body[0].createdAt
        user2.body.createdAt = list.body[1].createdAt
        expect(list.body).toStrictEqual([user1.body, user2.body])
    })

    //### GET USER ###
    it("should get user registered in db", async() => {
        const userRegistered = await apiCalls.registerUser('Paulo', 'paulo@mesquita.dev', '123123')
        const user = await apiCalls.getUser(userRegistered.body.id_user)
        delete user.body.createdAt
        delete user.body.updatedAt
        expect(user.body).toStrictEqual({
            username: 'Paulo', email: 'paulo@mesquita.dev', password: '123123', id_user: userRegistered.body.id_user, person_number: userRegistered.body.person_number
        })
    })

    it("should report error not found with that id", async() => {
        const user = await apiCalls.getUser(1)
        expect(user.body).toBe(null)
    })
    //### DELETE USER ###
    it("should not be in db after deleted", async() => {

    })
})