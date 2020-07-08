// author: Aksenov Andrey
const crypto = require('crypto')
const fs = require('fs')
const url = crypto.publicDecrypt(
  fs.readFileSync('./Crypto/key'),
    fs.readFileSync('./Crypto/secret')
)
console.log(url.toString('utf8'))