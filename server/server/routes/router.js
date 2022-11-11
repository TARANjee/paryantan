const express = require('express');
const route = express.Router();

const services = require('../services/render')
const controller = require('../controller/controller')

route.get('/', (req,res)=>{
    res.render('index');
});

route.post('/donation', services.donation);

// API
route.post('/api/donation', controller.donate)
// route.get('/api/users', controller.find)
// route.put('/api/users/:id', controller.update)
// route.delete('/api/users/:id', controller.delete)

module.exports = route