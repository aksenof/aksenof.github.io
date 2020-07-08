// author: Aksenov Andrey
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
let myDecrypt = fs.readFileSync(path.join(__dirname, './publicDecrypt.js'))
let key = fs.readFileSync(path.join(__dirname, 'key'))
fs.writeFileSync(
  path.join(__dirname, 'message'),
  crypto.publicEncrypt(key.toString('utf8'), myDecrypt)
)