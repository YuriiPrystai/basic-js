const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	let result = [];
	options.repeatTimes = !options.repeatTimes ? 1 : options.repeatTimes;
	for (let i=0; i<options.repeatTimes; i++) {
		result[i] = String(str);
		if (options.addition !== undefined) {
			if (!options.additionRepeatTimes) {
				result[i] += String(options.addition);
			} else {
				for (let countAdd=0; countAdd<options.additionRepeatTimes; countAdd++) {
					result[i] += String(options.addition);
					if (countAdd < options.additionRepeatTimes-1) {
						!options.additionSeparator ? result[i] += '|' : result[i] += options.additionSeparator;
					}
				}
			}
		}
	}
	return options.separator ? result.join(options.separator) : result.join('+');
};