const routes = require('express').Router()
const path = require('path')
const UserController = require('./controllers/UserController')
const SessionController = require('./controllers/SessionController')

routes.post('/registerUser', UserController.registerUser)
routes.get('/listUsers', UserController.listUsers)
routes.get('/getUser/:id', UserController.getUser)
routes.delete('/deleteUser/:id', UserController.deleteUser)
routes.put('/updateUser/:id', UserController.updateUser)
routes.post('/loginUser', SessionController.loginUser)

module.exports = routes