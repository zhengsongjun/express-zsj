const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const tojwt = promisify(jwt.sign)
const verify = promisify(jwt.verify)
const {tokenUuid} = require('../config/config.default')
module.exports.createToken = async userinfo => {
	return await tojwt(
		        	{userinfo},
		        	tokenUuid,
		        	{expiresIn:60*60*60}
		)
}


module.exports.verifyToken = async (req,res,next)=>{
	let token = req.headers.authorization
	token = token.split("Bearer ")[1] ||  null
	if(!token) {
		res.status(402).json({error:"请登录后使用!"})
	}
	try {
		let userinfo = await verify(token,tokenUuid)
		req.userinfo = userinfo
		next()
	}catch(e) {
		res.status('402').json({error:"无效token"})
	}
	next()
}