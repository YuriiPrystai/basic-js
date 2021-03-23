const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	final_depth = 1;
  calculateDepth(arr, current_depth = 1) {
    let iterationDepth;
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        this.final_depth = this.calculateDepth(item, current_depth + 1);
      }
    });
    this.final_depth = (current_depth > this.final_depth) ? current_depth : this.final_depth;
    iterationDepth = this.final_depth;
    this.final_depth = 0;
    return iterationDepth;
  }
};