const routes = require('express').Router()
const path = require('path')
const UserController = require('./controllers/UserController')

routes.post('/registerUser', UserController.registerUser)

module.exports = routes