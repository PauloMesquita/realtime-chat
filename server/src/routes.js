const routes = require('express').Router()
const path = require('path')
const UserController = require('./controllers/UserController')

routes.post('/registerUser', UserController.registerUser)
routes.get('/listUsers', UserController.listUsers)
routes.get('/getUser/:id', UserController.getUser)
routes.delete('/deleteUser/:id', UserController.deleteUser)
routes.put('/updateUser/:id', UserController.updateUser)

module.exports = routes