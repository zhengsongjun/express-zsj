const express = require('express')
const router = express.Router()
const useController = require('../controller/userController')
const { register } = require('../middleware/validator/userValidator')


router
.post('/register',register,
useController.register)
.get('/list',useController.list)
.delete('/',useController.delete)

module.exports = router