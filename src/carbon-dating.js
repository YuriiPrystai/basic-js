const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (isNaN(Number(sampleActivity)) || !sampleActivity || typeof(sampleActivity) !== 'string' || Number(sampleActivity) < 0 || Number(sampleActivity) > MODERN_ACTIVITY) {
		return false;
	}
  let item1 = Math.log(MODERN_ACTIVITY/Number(sampleActivity));
  let item2 = 0.693 / HALF_LIFE_PERIOD;
  let res = item1 / item2;
  if (Number.isFinite(res)) {
    return Math.ceil(res);
  } else {
    return false;
  }
};
