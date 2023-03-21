const mongoose = require('mongoose')
async function main () {
	await mongoose.connect('mongodb://127.0.0.1:27017/rexpress-video')
}

main().then(res=>{
	console.log("连接成功");
}).catch(err=>{
	console.log("链接失败")
})

module.exports = {
	User:mongoose.model('User',require('./userModal'))
}