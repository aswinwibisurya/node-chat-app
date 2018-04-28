var isRealString = (str) => {
	var x = typeof str === 'string' && str.trim().length > 0;
	return x;
}

module.exports = {isRealString};