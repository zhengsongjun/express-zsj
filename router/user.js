const express = require('express')
const router = express.Router()
const useController = require('../controller/userController')
const { register } = require('../middleware/validator/userValidator')


router
.post('/registers',register,
useController.register)
.get('/lists',useController.list)
.delete('/',useController.delete)

module.exports = router