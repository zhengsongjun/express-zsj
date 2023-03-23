const mongoose = require('mongoose')
const md5 = require('../util/md5')
const baseModal = require('./baseModal')
const userSchema = new mongoose.Schema({
	username:{
		type:String,
		require:true
	},
	age:{
		type:Number,
		require:false
	},
	email:{
		type:String,
		require:true
	},
	password:{
		type:String,
		require:true,
		set:value => md5(value),
		select:false
	},
	phone:{
		type:String,
		require:false
	},
	image:{
		type:String,
		default:null
	},
	cover:{
		type:String,
		default:null
	},
	channeldes:{
		type:String,
		default:null
	},
	...baseModal
})

module.exports = userSchema