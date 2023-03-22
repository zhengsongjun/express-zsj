const mongoose = require('mongoose')
const { mongodbPath } = require('../config/config.default')
async function main () {
	await mongoose.connect(mongodbPath)
}

main().then(res=>{
	console.log("连接成功");
}).catch(err=>{
	console.log("链接失败")
})

module.exports = {
	User:mongoose.model('User',require('./userModal'))
}