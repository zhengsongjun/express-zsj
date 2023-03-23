const { User } = require('../model/index')
const { createToken } = require('../util/jwt')
// 用户注册
exports.register = async (req,res) => {
	const userModel = new User(req.body)
	const dbBack = await userModel.save()
	const userDbBack = dbBack.toJSON()
	res.status(201).json({userDbBack})
}

// 用户登录
exports.login = async (req,res) => {
	const dbBack = await User.findOne(req.body)
	if(!dbBack){
		res.status(402).json({error:"邮箱或者密码不正确"})
	}
	const data = dbBack.toJSON()
	const token = await createToken(data)
	const result = { ...data , token } 
	res.status(200).json(result)
}

// 用户修改
exports.update = async (req,res) => {
	const id = req.userinfo.userinfo._id
	const updateData = await User.findByIdAndUpdate(id , req.body , {new:true})
	return res.status(200).json({user:updateData})
}

exports.list = async (req,res) => {
	console.log(req)
	res.send('/user-list')
}

exports.delete = async (req,res) => {
	console.log(req.res)
	// 删除操作
}