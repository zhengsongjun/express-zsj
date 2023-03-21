const express = require('express')
const router = express.Router()
const useController = require('../controller/userController')
router
.post('/register',useController.register)
.get('/list',useController.list)
.delete('/',useController.delete)

module.exports = router