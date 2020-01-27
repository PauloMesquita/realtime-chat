const routes = require('express').Router()
const path = require('path')

routes.get('*', (res, req) => {
    res.sendFile(path.join(__dirname+''))
})