const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let clearArray = new Array();
	for (let i=0; i<members.length; i++) {
		if (typeof(members[i]) === 'string') {
      members[i] = members[i].trim();
			clearArray.push(members[i][0].toUpperCase());
		}
	}
  return clearArray.sort().join('').trim();
};
