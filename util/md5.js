const crypto = require('crypto'); // 加密

module.exports = str => {
	return crypto.createHash('md5')
	.update('by'+str)
	.digest('hex')
}