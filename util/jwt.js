const jwt = require('jsonwebtoken')

const token = jwt.sign({foo:'hello'},'555')
console.log(token)