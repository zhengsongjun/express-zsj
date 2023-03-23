const express = require('express')
const router = express.Router()
const useController = require('../controller/userController')
const { register , login , update } = require('../middleware/validator/userValidator')
const { verifyToken } = require('../util/jwt')
const multer = require('multer')
const upload = multer({dest:'public/'})

router
.post('/registers',register,useController.register)
.post('/logins',login,useController.login)
.put('/',verifyToken,update,useController.update)
.post('/headimg',verifyToken,upload.single('headimg'),useController.headimg)
.get('/lists',verifyToken,useController.list)
.delete('/',useController.delete)

module.exports = router