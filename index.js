
'use strict'
var addon = require('bindings')('hello');
const { EventEmitter } = require('events')
const type = 'Crypto Hardware'
class CryptoBridgeKeyring extends EventEmitter {
  constructor (opts = {}) {
    console.log(addon.pointer());
    super()
  }
  testing(){
    console.log(addon.pointer());
  }
}

CryptoBridgeKeyring.type = type
module.exports = CryptoBridgeKeyring


