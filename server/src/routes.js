const routes = require('express').Router()
const UserController = require('./controllers/UserController')
const ChatController = require('./controllers/ChatController')
const SessionController = require('./controllers/SessionController')

//UserController routes 
routes.post('/registerUser', UserController.registerUser)
routes.get('/listUsers', UserController.listUsers)
routes.get('/getUser/:id', UserController.getUser)
routes.delete('/deleteUser/:id', UserController.deleteUser)
routes.put('/updateUser/:id', UserController.updateUser)

//SessionController routes
routes.post('/loginUser', SessionController.loginUser)

//ChatController routes
routes.post('/registerChat', ChatController.registerChat)
routes.get('/listChats', ChatController.listChats)
routes.get('/listChatUsers/:id', ChatController.listChatUsers)
routes.post('/insertUsers', ChatController.insertUsers)

module.exports = routes