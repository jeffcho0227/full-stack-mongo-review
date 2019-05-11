const Router = require('express').Router();
const controller = require('./controller.js');

Router
.route('/list')
.get(controller.getList)

Router
.route('/create')
.post(controller.create)

Router
.route('/update/:id')
.patch(controller.update)


module.exports = Router;