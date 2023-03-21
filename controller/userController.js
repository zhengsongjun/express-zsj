const { User } = require('../model/index')

exports.register = async (req,res) => {
	console.log(req.body)
	return 
	// const userModel = new User(req.body)
	// const dbBack = await userModel.save()
	// const userDbBack = dbBack.toJSON()
	// delete userDbBack.password
	// res.status(201).json({userDbBack})
}

exports.list = async (req,res) => {
	console.log(req.method)
	res.send('/video-list')
}

exports.delete = async (req,res) => {
	console.log(req.res)
	// 删除操作
}