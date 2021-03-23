const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push('');
    } else {
      this.chain.push(value);
    }
    return this;
  },
  removeLink(position) {
    if (typeof this.chain[position-1] === 'undefined' || !Number.isInteger(position-1)) {
      this.chain.length = 0;
      throw new CustomError('Error');
    } else {
      this.chain.splice(position-1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = '';
    if (this.chain.length === 0) {
      return str;
    } else {
      for (let i=0; i<this.chain.length; i++) {
        str += '( ' + this.chain[i] + ' )~~';
      }
      str = str.split('~~');
      str.splice(str.length-1, 1);
      str = str.join('~~');
      this.chain.length = 0;
      return str;
    }
  }
};

module.exports = chainMaker;
