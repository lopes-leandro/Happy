// import lib - dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

// initializing express
const server = express()
server
    // using estatic files
    .use(express.static('public'))

    // set up template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // app routes
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)

// turn server on
server.listen(5500)