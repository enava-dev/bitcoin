
var bitcore = require('bitcore-lib'),
    data = require('./data'),
    btNode = require('./btNode'),
    Unit = bitcore.Unit;



var system = {
  hdPrivKey: new bitcore.HDPrivateKey(data.hd.system.xprivkey),
  hdPubKey: new bitcore.HDPublicKey(data.hd.system.xpubkey)
}





var hdPrivKey = system.hdPrivKey.privateKey;
var hdPrivKeyWIF = system.hdPrivKey.privateKey.toWIF();

console.log('###');
console.log(JSON.stringify(hdPrivKey));
console.log('###');

console.log('hdPrivKey', system.hdPrivKey);
console.log('privKey', hdPrivKey);
console.log('privKeyWIF', hdPrivKeyWIF);




var privKey = bitcore.PrivateKey.fromWIF(hdPrivKeyWIF);
// console.log('privKey:', privKey);
// console.log('privkey:', JSON.stringify(privKey));

var seed = privKey.toString();
var network = privKey.network;

// console.log('seed:', seed);
// console.log('network:', network);

var hdTmp = new bitcore.HDPrivateKey();
hdTmp = hdTmp.fromSeed(seed, network);
console.log('hdTmp:', hdTmp);

// var hdPrivKey2 = bitcore.HDPrivateKey.fromSeed(seed, network);
var hdPrivKey2 =  bitcore.HDPrivateKey.fromSeed(seed);

var hdPrivKey2 = system.hdPrivKey.privateKey;
var hdPrivKeyWIF2 = system.hdPrivKey.privateKey.toWIF();



console.log('hdPrivKey2', hdPrivKey2);
console.log('privKey2', hdPrivKey2);
console.log('privKeyWIF2', hdPrivKeyWIF2);



var privDer_0 = hdPrivKey2.derive("m/0");

console.log('privDer_0:', privDer_0);
