const { body  } = require('express-validator');
const validate = require('../validator/errorBack')
const { User } = require('../../model/index')


module.exports.register = validate([
	body('username')
		.notEmpty().withMessage('用户名不能为空！').bail()
		.isLength({min:3}).withMessage("用户名长度小于3!"),
	body('email')
		.notEmpty().withMessage('邮箱不能为空').bail()
		.isEmail().withMessage('邮箱格式不正确').bail()
		.custom(async val => {
			const emailValidate = await User.findOne({email:val})
			if(emailValidate){
				return Promise.reject("邮箱已被注册")
			}
		}),
	body('phone')
		.notEmpty().withMessage('手机号不能为空').bail()
		.custom(async val => {
			const phoneValidate = await User.findOne({phone:val})
			if(phoneValidate) {
				return Promise.reject("手机号已注册")
			}
		}).bail()
])