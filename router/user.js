const express = require('express')
const router = express.Router()
const useController = require('../controller/userController')

const { body , validationResult } = require('express-validator')

router
.post('/register',body('username')
.notEmpty().withMessage('用户名不能为空！')
.isLength({min:3}).withMessage("用户名长度小于3!"),
(req,res,next)=>{
	const errors = validationResult(req);
	console.log(errors);
}
,useController.register)
.get('/list',useController.list)
.delete('/',useController.delete)

module.exports = router