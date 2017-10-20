'use strict';

var Bip38 = require('bip38'),
    bitcore = require('bitcore-lib');


var privKeyWIF = '5KN7MzqK5wt2TP1fQCYyHBtDrXdJuXbUzm4A9rKAteGu3Qi5CVR';
var privKey = new bitcore.PrivateKey(privKeyWIF);
var address = privKey.toAddress();
var addressStr = address.toString();

console.log('privKeyWIF:', privKeyWIF);
console.log('addressStr:', addressStr);



var bip38 = new Bip38();

// var encrypted = bip38.encrypt(privKeyWIF, 'super-secret', addressStr);
// console.log('encrypted:', encrypted);
// var decrypted = bip38.decrypt(encrypted, 'super-secret');
// console.log('decrypted:', decrypted);


var xpriv = 'xprv9s21ZrQH143K4LuQY6aUuEhfosXW92nWMcXzg5DAzsBFu3JpeswqhCkTy3Krb12Dd5MwSG4VihxP81VwNcXPb3igCK7cuDHEtKmFbFQjUck';
var hdPriv = new bitcore.HDPrivateKey(xpriv);
var hdPub = hdPriv.hdPublicKey;
var xpub = hdPub.xpubkey;



var encrypted = bip38.encrypt(xpriv, 'super-secret', xpub);
console.log('encrypted:', encrypted);
var decrypted = bip38.decrypt(encrypted, 'super-secret');
console.log('decrypted:', decrypted);





