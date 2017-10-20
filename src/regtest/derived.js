
var bitcore = require('bitcore-lib');


console.log('###');
console.log('### simple private key');
console.log('###');
var privKey = new bitcore.PrivateKey('testnet');
console.log('privKey:', privKey);
var privKeyWIF = privKey.toWIF();
console.log('privKeyWIF:', privKeyWIF);
var pubKey = privKey.toPublicKey();
console.log('pubKey:', pubKey);
var addressFromPub = pubKey.toAddress();
console.log('addressFromPub:', addressFromPub);
var addressFromPriv = privKey.toAddress();
console.log('addressFromPriv:', addressFromPriv);





console.log('###');
console.log('### hd private key master');
console.log('###');
var masterHDPrivKey = new bitcore.HDPrivateKey('testnet');
console.log('masterHDPrivKey', masterHDPrivKey);
var masterHDPubKey = masterHDPrivKey.hdPublicKey;
console.log('masterHDPubKey:', masterHDPubKey);
var masterPrivKey = masterHDPrivKey.privateKey;
console.log('masterPrivKey', masterPrivKey);

var pubKey = masterHDPrivKey.publicKey;
console.log('pubKey', pubKey);


var masterPubKey = masterHDPubKey.publicKey;
console.log('masterPubKey', masterPubKey);
var masterPrivKeyWIF = masterPrivKey.toWIF();
console.log('masterPrivKeyWIF:', masterPrivKeyWIF);
var masterPubKeyFromPrivKey = masterPrivKey.toPublicKey();
console.log('masterPubKeyFromPrivKey:', masterPubKeyFromPrivKey);
var masterAddressFromPub = masterPubKey.toAddress();
console.log('masterAddressFromPub:', masterAddressFromPub);
var masterAddressFromPriv = masterPrivKey.toAddress();
console.log('masterAddressFromPriv:', masterAddressFromPriv);
var masterAddressFromPubKeyFromPrivKey = masterPubKeyFromPrivKey.toAddress();
console.log('masterAddressFromPubKeyFromPrivKey:', masterAddressFromPubKeyFromPrivKey);




console.log('###');
console.log('### derived 1 Priv Key');
console.log('###');
var derived1HDPrivKey = masterHDPrivKey.derive("m/44'/0'/0'/0/1337");
console.log('derived1HDPrivKey', derived1HDPrivKey);
var derived1HDPubKey = derived1HDPrivKey.hdPublicKey;
console.log('derived1HDPubKey:', derived1HDPubKey);
var derived1PrivKey = derived1HDPrivKey.privateKey;
console.log('derived1PrivKey', derived1PrivKey);

var pubKey2 = derived1HDPrivKey.publicKey;
console.log('pubKey2', pubKey2);


var derived1PubKey = derived1HDPubKey.publicKey;
console.log('derived1PubKey', derived1PubKey);
var derived1PrivKeyWIF = derived1PrivKey.toWIF();
console.log('derived1PrivKeyWIF:', derived1PrivKeyWIF);
var derived1PubKeyFromPrivKey = derived1PrivKey.toPublicKey();
console.log('derived1PubKeyFromPrivKey:', derived1PubKeyFromPrivKey);
var derived1AddressFromPub = derived1PubKey.toAddress();
console.log('derived1AddressFromPub:', derived1AddressFromPub);
var derived1AddressFromPriv = derived1PrivKey.toAddress();
console.log('derived1AddressFromPriv:', derived1AddressFromPriv);
var derived1AddressFromPubKeyFromPrivKey = derived1PubKeyFromPrivKey.toAddress();
console.log('derived1AddressFromPubKeyFromPrivKey:', derived1AddressFromPubKeyFromPrivKey);



console.log('###');
console.log('### derived by HD Public Key');
console.log('###');
var hdPrivKey = new bitcore.HDPrivateKey('testnet');
console.log('### hdPrivKey:', hdPrivKey);

console.log('network:', hdPrivKey.network);
console.log('privateKey:', hdPrivKey.privateKey);
console.log('publicKey:', hdPrivKey.publicKey);
console.log('xprivkey:', hdPrivKey.xprivkey);
console.log('xpubkey:', hdPrivKey.xpubkey);
console.log('stringify:', JSON.stringify(hdPrivKey));

var hdPubKey = hdPrivKey.hdPublicKey;
console.log('### hdPubKey:', hdPubKey);

console.log('network:', hdPubKey.network);
console.log('privateKey:', hdPubKey.privateKey);
console.log('publicKey:', hdPubKey.publicKey);
console.log('xprivkey:', hdPubKey.xprivkey);
console.log('xpubkey:', hdPubKey.xpubkey);
console.log('stringify:', JSON.stringify(hdPubKey));



var hdPubKeyGenerated = new bitcore.HDPublicKey(hdPrivKey.xpubkey);
console.log('### hdPubKeyGenerated:', hdPubKeyGenerated);

console.log('network:', hdPubKeyGenerated.network);
console.log('privateKey:', hdPubKeyGenerated.privateKey);
console.log('publicKey:', hdPubKeyGenerated.publicKey);
console.log('xprivkey:', hdPubKeyGenerated.xprivkey);
console.log('xpubkey:', hdPubKeyGenerated.xpubkey);
console.log('stringify:', JSON.stringify(hdPubKeyGenerated));



var derived = masterHDPrivKey.derive("m/44'/0'/0'/0/1337");
console.log('### derived:', derived);
