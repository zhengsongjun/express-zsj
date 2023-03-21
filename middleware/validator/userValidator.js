const { body  } = require('express-validator');
const validate = require('../validator/errorBack')

module.exports.register = validate([
	body('username')
		.notEmpty().withMessage('用户名不能为空！').bail()
		.isLength({min:3}).withMessage("用户名长度小于3!"),
	body('email')
		.notEmpty().withMessage('邮箱不能为空')
])