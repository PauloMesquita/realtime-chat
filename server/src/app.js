const express = require('express')
const path = require('path')

require('./database')

function AppController(){

    this.middlewares = () => {
        this.app.use(express.static(path.join(__dirname, '../../client/build')))
        this.app.use(express.json())
    }

    this.routes = () => {
        this.app.use(require('./routes'))
    }

    this.app = express()
    this.middlewares()
    this.routes()
}

module.exports = new AppController().app