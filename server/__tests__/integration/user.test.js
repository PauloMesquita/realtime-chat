const request = require('supertest')
const app = require('../../src/app')
const truncate = require('../utils/truncate')
const factory = require('../factories')

describe("CRUD User", () => {
    beforeEach(async () => {
        await truncate()
    })


    //### REGISTER USER ###
    it("should create user", async () => {
        const user = await request(app).post('/registerUser').send({
            username: 'Paulo',
            email: 'paulo@mesquita.dev',
            password: '123123'
        })

        expect(user.body.email).toBe("paulo@mesquita.dev")
    })

    it("should report out of password problem", async () => {
        const user = await request(app).post('/registerUser').send({
            username: 'Paulo',
            email: 'paulo@mesquita.dev'
        })

        expect(user.body).toBe("tbl_users.password cannot be null")
    })

    it("should report email already exists", async () => {
        await request(app).post('/registerUser').send({
            username: 'Paulo',
            email: 'paulo@mesquita.dev',
            password: '123123'
        })

        const user2 = await request(app).post('/registerUser').send({
            username: 'Paulovm',
            email: 'paulo@mesquita.dev',
            password: '123123'
        })

        expect(user2.body).toBe("email must be unique")
    })

    it("should report username already exists", async () => {
        await request(app).post('/registerUser').send({
            username: 'Paulo',
            email: 'paulo@mesquita.dev',
            password: '123123'
        })

        const user2 = await request(app).post('/registerUser').send({
            username: 'Paulo',
            email: 'paulo@mesquita.devs',
            password: '123123'
        })

        expect(user2.body).toBe("username must be unique")
    })

    //### LIST USERS ###
    it("should list users registered in the db", async() => {
        await factory.create('tbl_users')
        await factory.create('tbl_users', {
            username: "Paulo V",
            email: "paulo@mesquita.devs"
        })

        const list = await request(app).get('/listUsers')

        delete list.body[0].createdAt
        delete list.body[0].updatedAt
        delete list.body[1].createdAt
        delete list.body[1].updatedAt

        expect(list.body).toStrictEqual([{
            username: 'Paulo', email: 'paulo@mesquita.dev', password: '123123', id_user: 1
        },{
            username: 'Paulo V', email: 'paulo@mesquita.devs', password: '123123', id_user: 2
        }])
    })

    //### GET USER ###
    it("should get user registered in db", async() => {
        const userRegistered = await factory.create('tbl_users')

        const user = await request(app).get(`/getUser/1`)

        delete user.body.createdAt
        delete user.body.updatedAt

        expect(user.body).toStrictEqual({
            username: 'Paulo', email: 'paulo@mesquita.dev', password: '123123', id_user: userRegistered.body.id_user
        })
    })

    it("should report error not found with that id", async() => {
        const user = await request(app).get(`/getUser/1`)

        expect(user.body).toBe(null)
    })

    //### DELETE USER ###
    it("should not be in db after deleted", async() => {
        const userRegistered = await factory.create('tbl_users')

        await request(app).post('/deleteUser')
    })
})