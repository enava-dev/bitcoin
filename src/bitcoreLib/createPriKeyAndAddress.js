
var bitcore = require('bitcore-lib');


/*
//create a random 32 base number
var rand_buffer = bitcore.crypto.Random.getRandomBuffer(32);
console.log('rand_buffer:', rand_buffer);

//hexadecimal number
// we will use it as PrivateKey
var rand_number = bitcore.crypto.BN.fromBuffer(rand_buffer);
console.log('rand_number:', rand_number);

//string random number
var sr_number = rand_number.toString();
console.log('sr_number', sr_number);

//generate an address on testnet from random hexadecimal number
var address = new bitcore.PrivateKey(rand_number).toAddress('testnet');
console.log('address:', address);
*/



//another way to obtain a private key
// WIF: wallet input format
//priKey is a string not a PrivateKey object
var priKeyWIF = bitcore.PrivateKey('testnet').toWIF();
console.log('priKeyWIF:', priKeyWIF);

//creata a PrivateKey object an converts into address
var address2 = new bitcore.PrivateKey(priKeyWIF).toAddress('testnet');
console.log('address', address);
