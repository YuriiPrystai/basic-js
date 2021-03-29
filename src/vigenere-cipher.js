const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  alphabet = ['a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l', 
        'm', 'n', 'o', 'p', 'q', 'r', 
        's', 't', 'u', 'v', 'w', 'x', 
        'y', 'z']
  directMashine = true;
  constructor(value) { 
    switch (value) {
      case true:
        this.directMashine = true;
        break;
      case false:
        this.directMashine = false;
        break;
      default:
        break;
    }
  }
    encrypt(message, key) {
      if (typeof message === undefined || typeof key === undefined) {
        throw new CustomError('Error');
      }
      let gamma = [];
      let keyArray = key.split('');
      let messageArray = message.split('');
      let counterForGamma = 0;
      let encrypted = [];
      // getting Gamma
      for (let i=0; i<messageArray.length; i++) {
        if (this.alphabet.indexOf(messageArray[i].toLowerCase()) !== -1) {
          gamma.push(keyArray[counterForGamma].toLowerCase());
          if (typeof keyArray[counterForGamma+1] === 'undefined') {
            counterForGamma = 0;
          } else {
            counterForGamma++;
          }
        } else {
          gamma.push(' ');	
        }
      }
      // Vigenere
    for (let i=0; i<messageArray.length; i++) {
      if (this.alphabet.indexOf(messageArray[i].toLowerCase()) !== -1 && this.alphabet.indexOf(gamma[i]) !== -1) {
        encrypted[i] = this.alphabet[(this.alphabet.indexOf(messageArray[i].toLowerCase()) + this.alphabet.indexOf(gamma[i])) % this.alphabet.length].toUpperCase();
      } else {
        encrypted[i] = messageArray[i].toUpperCase();
      }
    }
    if (this.directMashine) {
      return encrypted.join('');
    } else {
      return encrypted.reverse().join('');
    }
  }
  decrypt(encryptedMessage, key) {
    if (typeof encryptedMessage === undefined || typeof key === undefined) {
      throw new CustomError('Error');
      }
    let gamma = [];
      let keyArray = key.split('');
      let messageArray = encryptedMessage.split('');
      let counterForGamma = 0;
    let decrypted = [];
    // getting Gamma
      for (let i=0; i<messageArray.length; i++) {
        if (this.alphabet.indexOf(messageArray[i].toLowerCase()) !== -1) {
          gamma.push(keyArray[counterForGamma].toLowerCase());
          if (typeof keyArray[counterForGamma+1] === 'undefined') {
            counterForGamma = 0;
          } else {
            counterForGamma++;
          }
        } else {
          gamma.push(' ');	
        }
      }
      // Decrypting
      for (let i=0; i<messageArray.length; i++) {
      if (this.alphabet.indexOf(messageArray[i].toLowerCase()) !== -1 && this.alphabet.indexOf(gamma[i]) !== -1) {
        decrypted[i] = this.alphabet[(this.alphabet.indexOf(messageArray[i].toLowerCase()) + this.alphabet.length - this.alphabet.indexOf(gamma[i])) % this.alphabet.length].toUpperCase();
      } else {
        decrypted[i] = messageArray[i].toUpperCase();
      }
    }
    if (this.directMashine) {
      return decrypted.join('');
    } else {
      return decrypted.reverse().join('');
    }
  }
}

module.exports = VigenereCipheringMachine;