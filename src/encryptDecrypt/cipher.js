// Part of https://github.com/chris-rock/node-crypto-examples

// Nodejs encryption with CTR
var crypto = require('crypto');

function encrypt(text, password){
  var cipher = crypto.createCipher('aes-256-ctr', password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
 
function decrypt(text, password){
  var decipher = crypto.createDecipher('aes-256-ctr', password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}
 
var hw = encrypt("hello world", 'password123')
console.log('hw', hw);
// outputs hello world
console.log('decrypt',decrypt(hw, 'password'));





// value = crypto.createHash('sha256').update(pass).digest('base64');